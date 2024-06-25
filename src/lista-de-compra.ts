import {
  calculaTotalProductos,
  calcularDesgloseIva,
  calcularIva,
  calcularLineaTicket,
} from "./lista-de-compra.helper";
import { LineaTicket, TicketFinal } from "./model";

export const calculaTicket = (lineaTicket: LineaTicket[]): TicketFinal => {
  if (!lineaTicket) {
    throw new Error("Los parámetros introducidos no son correctos");
  }

  const resultadoLineaTicket = calcularLineaTicket(lineaTicket);

  const subtotal = calculaTotalProductos(lineaTicket);
  const totalIva = calcularIva(lineaTicket);
  const totalConIva = subtotal + totalIva;

  const desgloseIva = calcularDesgloseIva(lineaTicket);

  return {
    lineas: resultadoLineaTicket,
    total: {
      totalSinIva: subtotal,
      totalConIva: totalConIva,
      totalIva: totalIva,
    },
    desgloseIva: desgloseIva,
  };
};
