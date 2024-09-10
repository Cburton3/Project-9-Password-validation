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
    return { esValida: true }; //need curly braces here as without them you are onyl returning a single value (like a string, number, or boolean). With curly braces: You're returning an object, which can hold multiple key-value pairs. Here i'm only returning one value but that value is still part of an object (ValidacionClave). so you can return 'true' but you cant return esValida: true'. get it?
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  }
  // clave.split('').forEach(character => {// doesn't work because forEach doesn't return values or stop execution
  //     if(character === character.toUpperCase()) {
  //         return {esValido: true}
  //     } else {
  //         return {error: 'La clave debe de tener mayúsculas y minúsculas'}
  //     }
  // })
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  if (!clave) {
    throw new Error("Los parámetros introducidos no son correctos");
  }
  const hasNumbers = clave
    .split("")
    .some((character) => !isNaN(Number(character))); //this checks whether the character is a valid number. isNaN is -ve so needed the '!' to check if there is a number

  //character === parseInt(character)) //doesnt work as parseInt converts the damn thing and wont do shit if it aint a (strnig) number
  //some only works on arrays (array method so you have to split)

  if (hasNumbers) {
    return { esValida: true };
  } else {
    return { esValida: false, error: "La clave debe de tener números" };
  }
  // Si la clave no tiene números, el error será: "La clave debe de tener números".
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
  //outside the 2 for loops is the else '/ If no special characters were found, return an error'
  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales",
  };
  // const hasSpecialCharacters = clave.split('').some(character => character === specialCharactersArray[i]);
  // return {esValida: true}
  // Si la clave no tiene caracteres especiales, el error será: "La clave debe de tener caracteres especiales".
  // } else {
  //   return {esValida: false, error: 'La clave debe de tener caracteres especiales'};
  // }
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
  // Si la clave no tiene una longitud mínima de 8 caracteres, el error será: "La clave debe de tener una longitud mínima de 8 caracteres".
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
  // Si la clave tiene el nombre del usuario, el error será: "La clave no debe tener el nombre del usuario".
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  // const claveArray = clave.join('') //join makes a string cos can only use on an array
  // const claveArrayd = clave.split('') //makes an array of the words/letters

  for (let i = 0; i < commonPasswords.length; i++) {
    if (clave.includes(commonPasswords[i])) {
      return {
        esValida: false,
        error: "La clave no debe de contener palabras comunes",
      };
    }
  }
  return { esValida: true };

  // Si la clave tiene palabras comunes, el error será: "La clave no debe de contener palabras comunes".
};
