/**
 *  ReadonlyArray<T>
 * Solo deja usar los metodos que no muten el array origunal
 */

const numbers: ReadonlyArray<number> = [1, 2, 2, 2];
// numbers.push(9);
// numbers.pop();
// numbers.unshift(1);
numbers.filter(() => {});
numbers.reduce(() => 0);
numbers.map(() => 0);
