import { commonPasswords } from "./constantes";
import { ValidacionClave } from "./model";
import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./password-helper";

export const validarClave = (
  clave: string,
  nombreUsuario: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !nombreUsuario || !commonPasswords) {
    throw new Error("Los parámetros introducidos no son correctos");
  }

  let result;
  
  result = tieneMayusculasYMinusculas(clave);
  if (!result.esValida) {
    return result;
  }

  result = tieneNumeros(clave);
  if (!result.esValida) {
    return result;
  }

  result = tieneCaracteresEspeciales(clave);
  if (!result.esValida) {
    return result;
  }

  result = tieneLongitudMinima(clave);
  if (!result.esValida) {
    return result;
  }

  result = tieneNombreUsuario(nombreUsuario, clave);
  if (!result.esValida) {
    return result;
  }

  result = tienePalabrasComunes(clave, commonPasswords);
  if (!result.esValida) {
    return result;
  }

  return { esValida: true };
};

validarClave('sdgh2e5A', 'CharlieWilson', commonPasswords);