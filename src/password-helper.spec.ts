import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./password-helper";

describe("tieneMayusculasYMinusculas", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneMayusculasYMinusculas(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneMayusculasYMinusculas(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns esValido: true if there are both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgh2e5A";

    //Act
    const result = tieneMayusculasYMinusculas(clave);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if there arent both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgh2e5";

    //Act
    const result = tieneMayusculasYMinusculas(clave);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
    expect(result).toEqual(expected);
  });
});

describe("tieneNumeros", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneNumeros(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneNumeros(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns esValido: true if there are both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgh2e5A";

    //Act
    const result = tieneNumeros(clave);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if there arent both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgheA";

    //Act
    const result = tieneNumeros(clave);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener números",
    };
    expect(result).toEqual(expected);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneCaracteresEspeciales(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneCaracteresEspeciales(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns esValido: true if there are special characters in the array", () => {
    //Arrange
    const clave: string = "sdgh2e5@A";

    //Act
    const result = tieneCaracteresEspeciales(clave);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if there arent both capital and lowercase letters", () => {
    //Arrange
    const clave: string = "sdgheA";

    //Act
    const result = tieneCaracteresEspeciales(clave);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener caracteres especiales",
    };
    expect(result).toEqual(expected);
  });
});

describe("tieneLongitudMinima", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const clave: any = undefined;

    //Act
    const result = () => tieneLongitudMinima(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const clave: any = null;

    //Act
    const result = () => tieneLongitudMinima(clave);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns esValido: true if there are a minimum of 8 characters", () => {
    //Arrange
    const clave: string = "sdgh2e5@A";

    //Act
    const result = tieneLongitudMinima(clave);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if there arent a minimum of 8 characters", () => {
    //Arrange
    const clave: string = "sdgheA";

    //Act
    const result = tieneLongitudMinima(clave);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
    expect(result).toEqual(expected);
  });
});

describe("tieneNombreUsuario", () => {
    it("returns esValido: true if the password is the same as the username", () => {
    //Arrange
    const clave: string = "sdgheA";
    const nombreUsuario: string = 'CharlieWilson'

    //Act
    const result = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const expected = {
      esValida: true,
    };
    expect(result).toEqual(expected);
  });

  it("returns esValido: false if the password isnt the same as the username", () => {
    //Arrange
    const clave: string = "CharlieWilson@A";
    const nombreUsuario: string = 'CharlieWilson'

    //Act
    const result = tieneNombreUsuario(nombreUsuario, clave);

    //Assert
    const expected = {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
    expect(result).toEqual(expected);
  });
});

describe("tienePalabrasComunes", () => {
  it("returns esValido: true if the password contains common words", () => {
  //Arrange
  const clave: string = "sdgheA";
  const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
  ]

  //Act
  const result = tienePalabrasComunes( clave, commonPasswords);

  //Assert
  const expected = {
    esValida: true,
  };
  expect(result).toEqual(expected);
});

it("returns esValido: false if the password doesnt contains common words", () => {
  //Arrange
  const clave: string = "CharliepasswordWilson@A";
  const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
  ]

  //Act
  const result = tienePalabrasComunes( clave, commonPasswords);

  //Assert
  const expected = {
    esValida: false,
    error: "La clave no debe de contener palabras comunes",
  };
  expect(result).toEqual(expected);
});
});