import { validarClave } from "./password";

describe("validarClave", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;
    const nombreUsuario: any = undefined;
    const commonPasswords: any = undefined;

    //Act
    const result = () => validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;
    const nombreUsuario: any = null;
    const commonPasswords: any = null;

    //Act
    const result = () => validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns esValido: true if all the requisites are met", () => {
    //Arrange
    const clave: string = "sdgh2e5A";
    const nombreUsuario: string = "CharlieWilson";
    const commonPasswords: string[] = ["password", "123456", "qwerty", "admin"];

    //Act
    const result = validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if all condition are not met: there arent both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgh2e5";
    const nombreUsuario: string = "CharlieWilson";
    const commonPasswords: string[] = ["password", "123456", "qwerty", "admin"];
    //Act
    const result = validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if all condition are not met: no numbers", () => {
    //Arrange
    const clave: string = "sdgheA";
    const nombreUsuario: string = "CharlieWilson";
    const commonPasswords: string[] = ["password", "123456", "qwerty", "admin"];
    //Act
    const result = validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if all condition are not met: username used", () => {
    //Arrange
    const clave: string = "CharlieWilson2e5A";
    const nombreUsuario: string = "CharlieWilson";
    const commonPasswords: string[] = ["password", "123456", "qwerty", "admin"];
    //Act
    const result = validarClave(clave, nombreUsuario, commonPasswords);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(result).toEqual(expected);
  });
});
