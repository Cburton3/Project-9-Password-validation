import { ValidacionClave } from "./model";

export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  const hasCapitalLetters = clave
    .split("")
    .some(
      (character) =>
        character === character.toUpperCase() &&
        character !== character.toLowerCase()
    );
  const hasLowerCaseLetters = clave
    .split("")
    .some(
      (character) =>
        character === character.toLowerCase() &&
        character !== character.toUpperCase()
    );

  if (hasCapitalLetters && hasLowerCaseLetters) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  const hasNumbers = clave
    .split("")
    .some((character) => !isNaN(Number(character)));

  if (hasNumbers) {
    return { esValida: true };
  } else {
    return { esValida: false, error: "La clave debe de tener números" };
  }
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  const specialCharacters = '[!@#$%^&*(),.?":{}|<>]/';
  const specialCharactersArray = specialCharacters.split("");
  for (let i = 0; i < clave.length; i++) {
    for (let j = 0; j < specialCharactersArray.length; j++) {
      if (clave[i] === specialCharactersArray[j]) {
        return { esValida: true };
      }
    }
  }
  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  if (clave.length >= 8) {
    return { esValida: true };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener una longitud mínima de 8 caracteres",
    };
  }
};

export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.includes(nombreUsuario)) {
    return {
      esValida: false,
      error: "La clave no debe tener el nombre del usuario",
    };
  }
  return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  for (let i = 0; i < commonPasswords.length; i++) {
    if (clave.includes(commonPasswords[i])) {
      return {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };
    }
  }
  return { esValida: true };
};
