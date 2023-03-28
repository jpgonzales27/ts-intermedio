//! para js estos valores el operador || los toma como false
//! 0 === false
//! '' === false
//! false === false

//* valores por defecto en el return de la funcion
export const createProductNormal = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock || 10,
    isNew: isNew || true,
  };
};

const p1 = createProductNormal(1, true, 12);
console.log(p1);

const p2 = createProductNormal(1);
console.log(p2);

//! aqui se ve el problema queremos definir los siguienes valores pero
//! el operador || los tomara como false y asiganara los valores por defecto
const p3 = createProductNormal(1, false, 0);
console.log(`Se esperaba (1, 0, false) pero: `, p3);

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

//* valores por defecto con el operador ?? (Nullish Coalescing)
export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true,
  };
};

const p7 = createProduct(1, true, 12);
console.log(p7);

const p8 = createProduct(1);
console.log(p8);

const p9 = createProduct(1, false, 0);
console.log(p9);
