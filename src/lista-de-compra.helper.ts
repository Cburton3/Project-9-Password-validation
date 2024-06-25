import { listaTiposIva } from "./constantes";
import {
  LineaTicket,
  TipoIva,
  Producto,
  ResultadoLineaTicket,
  TotalPorTipoIva,
} from "./model";

export const calculaTotalProductos = (lineasTicket: LineaTicket[]): number => {
  let sumaPrecios = 0;
  if (!lineasTicket) {
    throw Error("Los parámetros introducidos no son correctos");
  }
  for (let i = 0; i < lineasTicket.length; i++) {
    sumaPrecios += lineasTicket[i].cantidad * lineasTicket[i].producto.precio;
  }
  return sumaPrecios;
};

const giveIva = (tipoIva: TipoIva): number => {
  switch (tipoIva) {
    case "general":
      return 21;
    case "reducido":
      return 10;
    case "superreducidoA":
      return 5;
    case "superreducidoB":
      return 4;
    case "superreducidoC":
      return 0;
    case "sinIva":
      return 0;
    default:
      throw new Error("Tipo de IVA no reconocido");
  }
};

export const calcularIva = (lineaTicket: LineaTicket[]): number => {
  let totalIva = 0;
  if (!lineaTicket) {
    throw Error("Los parámetros introducidos no son correctos");
  }
  for (let i = 0; i < lineaTicket.length; i++) {
    const giveIvaRate = giveIva(lineaTicket[i].producto.tipoIva);
    const subtotalIva =
      (giveIvaRate / 100) *
      lineaTicket[i].producto.precio *
      lineaTicket[i].cantidad;

    totalIva += subtotalIva;
  }
  return parseFloat(totalIva.toFixed(2));
};

export const calcularDesgloseIva = (
  lineaTicket: LineaTicket[]
): TotalPorTipoIva[] => {
  if (!lineaTicket) {
    throw Error("Los parámetros introducidos no son correctos");
  }
  const listaTotalPorTipoIva = listaTiposIva.map((tipoIva) => {
    const productosPorTipoIva = filterByIva(lineaTicket, tipoIva);

    return {
      tipoIva: tipoIva,
      cuantia: calcularIva(productosPorTipoIva),
    };
  });
  return listaTotalPorTipoIva;
};

const filterByIva = (
  productos: LineaTicket[],
  tipoIva: TipoIva
): LineaTicket[] => {
  return productos.filter((item) => item.producto.tipoIva === tipoIva);
};

export const calcularLineaTicket = (
  lineaTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  if (!lineaTicket) {
    throw Error("Los parámetros introducidos no son correctos");
  }

  let ResultadoLineasTicket: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineaTicket.length; i++) {
    const nombre = lineaTicket[i].producto.nombre;
    const cantidad = lineaTicket[i].cantidad;
    const tipoIva = lineaTicket[i].producto.tipoIva;
    const iva =
      (giveIva(tipoIva) / 100) *
      lineaTicket[i].producto.precio *
      lineaTicket[i].cantidad;
    const precioSinIva =
      lineaTicket[i].producto.precio * lineaTicket[i].cantidad;
    const precioConIva =
      iva + lineaTicket[i].producto.precio * lineaTicket[i].cantidad;

    ResultadoLineasTicket.push({
      nombre,
      cantidad,
      precioSinIva: parseFloat(precioSinIva.toFixed(2)),
      tipoIva,
      precioConIva: parseFloat(precioConIva.toFixed(2)),
    });
  }
  return ResultadoLineasTicket;
};
