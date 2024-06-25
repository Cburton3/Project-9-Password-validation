import { calculaTicket } from "./lista-de-compra";
import { LineaTicket } from "./model";

describe("calculaTicket", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;

    //Act
    const result = () => calculaTicket(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calculaTicket(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calculaTicket(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("returns TicketFinal with 'lineas, total and desglose", () => {
    //Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      },
    ];

    //Act
    const result = calculaTicket(lineasTicket);

    //Assert
    const expected = {
      lineas: [
        {
          nombre: "Legumbres",
          cantidad: 2,
          precioSinIva: 4,
          tipoIva: "general",
          precioConIva: 4.84,
        },
      ],
      total: {
        totalSinIva: 4,
        totalConIva: 4.84,
        totalIva: 0.84,
      },
      desglose: [
        {
          tipoIva: "general",
          cuantia: 0.84,
        },
      ],
    };
    expect(result).toEqual(expected);
  });
});
