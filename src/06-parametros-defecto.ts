//* valores por defecto en los parametros de la funcion
const createProduct2 = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 10
) => ({ id, stock, isNew });

const p4 = createProduct2(1, true, 12);
console.log(p4);
const p5 = createProduct2(1);
console.log(p5);
const p6 = createProduct2(1, false, 0);
console.log(p6);
