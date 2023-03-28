// Nico => [N,i,c,o] => string => string[]
// [N,i,c,o] => Nico => string[] => string

//!el Problema
/**
 * como devolvemos un string | string[] typescript no puede inferir que devolvimos
 *  eso no nos permite acceder a los metodos y debemos hacer una validacion extra
 *  para poder tener acceso a los mismos
 */
function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}

const rtaArray = parseStr('Nico');
// rtaArray.reverse();
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Nico =>', rtaArray);

const rtaStr = parseStr(['N', 'i', 'c', 'o']);
// rtaStr.toLowerCase();
if (typeof rtaStr === 'string') {
  rtaStr.toLowerCase();
}
console.log('rtaStr', "['N','i','c','o'] =>", rtaStr);
