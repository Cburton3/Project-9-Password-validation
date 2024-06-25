import {
  calculaTotalProductos,
  calcularDesgloseIva,
  calcularIva,
  calcularLineaTicket,
} from "./lista-de-compra.helper";
import { LineaTicket, TipoIva } from "./model";

describe("calculaTotalProductos", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;

    //Act
    const result = () => calculaTotalProductos(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calculaTotalProductos(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("adds price of all products--> legumes (2*2 = 4), perfume (20*3 = 60), leche (1*6 = 6), lasagna (5*1=5) => 75 ", () => {
    //Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: { nombre: "legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      }, //mistake i made here is i only wrote the producto.precio: 2 which not allowed as within producto i need to quote nombre and ivatype
      {
        producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
        cantidad: 3,
      },
      {
        producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
        cantidad: 6,
      },
      {
        producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
        cantidad: 1,
      },
    ];

    //Act
    const result = calculaTotalProductos(lineasTicket);

    //Assert
    const expected = 75;
    expect(result).toBe(expected);
  });
});

describe("calcularIva", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;

    //Act
    const result = () => calcularIva(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calcularIva(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("adds Iva of all products--> legumes (2*2 = 4 * Iva 21%) = 0.84, perfume (20*3 = 60 * Iva 21%) = 12.6, leche (1*6 = 6 * Iva 0) = 0, lasagna (5*1=5 * Iva 5%) = 0.25 => 13.69", () => {
    //Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: { nombre: "legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      },
      {
        producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
        cantidad: 3,
      },
      {
        producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
        cantidad: 6,
      },
      {
        producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
        cantidad: 1,
      },
    ];

    //Act
    const result = calcularIva(lineasTicket);

    //Assert
    const expected = 13.69;
    expect(result).toBe(expected);
  });
});

describe("calcularDesgloseIva", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;

    //Act
    const result = () => calcularDesgloseIva(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calcularDesgloseIva(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Creates an array for each Iva type and calculates the values of Iva for each one", () => {
    //Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: { nombre: "legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      },
      {
        producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
        cantidad: 3,
      },
      {
        producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
        cantidad: 6,
      },
      {
        producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
        cantidad: 1,
      },
    ];

    //Act
    const result = calcularDesgloseIva(lineasTicket);

    //Assert
    const expected = [
      {
        tipoIva: "general",
        cuantia: 13.44,
      },
      {
        tipoIva: "reducido",
        cuantia: 0,
      },

      {
        tipoIva: "superreducidoA",
        cuantia: 0.25,
      },
      {
        tipoIva: "superreducidoB",
        cuantia: 0,
      },
      {
        tipoIva: "superreducidoC",
        cuantia: 0,
      },
      {
        tipoIva: "sinIva",
        cuantia: 0,
      },
    ];
    expect(result).toEqual(expected);
  });
});

describe("calcularLineaTicket", () => {
  it("Deberia de devolver un throw si la entrada es undefined", () => {
    //Arrange
    const lineaTicket: any = undefined;

    //Act
    const result = () => calcularLineaTicket(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Deberia de devolver un throw si la entrada es null", () => {
    //Arrange
    const lineaTicket: any = null;

    //Act
    const result = () => calcularLineaTicket(lineaTicket);

    //Assert
    expect(result).toThrowError("Los parámetros introducidos no son correctos");
  });

  it("Creates an array of all products with info such as name, Quantity, price without Iva, with and Iva type", () => {
    //Arrange
    const lineasTicket: LineaTicket[] = [
      {
        producto: { nombre: "Legumbres", precio: 2, tipoIva: "general" },
        cantidad: 2,
      },
      {
        producto: { nombre: "Perfume", precio: 20, tipoIva: "general" },
        cantidad: 3,
      },
      {
        producto: { nombre: "Leche", precio: 1, tipoIva: "superreducidoC" },
        cantidad: 6,
      },
      {
        producto: { nombre: "Lasaña", precio: 5, tipoIva: "superreducidoA" },
        cantidad: 1,
      },
    ];

    //Act
    const result = calcularLineaTicket(lineasTicket);

    //Assert
    const expected = [
      {
        nombre: "Legumbres",
        cantidad: 2,
        precioSinIva: 4,
        tipoIva: "general",
        precioConIva: 4.84,
      },
      {
        nombre: "Perfume",
        cantidad: 3,
        precioSinIva: 60,
        tipoIva: "general",
        precioConIva: 72.6,
      },
      {
        nombre: "Leche",
        cantidad: 6,
        precioSinIva: 6,
        tipoIva: "superreducidoC",
        precioConIva: 6,
      },
      {
        nombre: "Lasaña",
        cantidad: 1,
        precioSinIva: 5,
        tipoIva: "superreducidoA",
        precioConIva: 5.25,
      },
    ];
    expect(result).toEqual(expected);
  });
});
