import { Product } from './product.model';

/**
 * Para tener un codigo mas limpio se suele colocar todos los DTOs
 * en su propio archivo
 */

/**
 * Con Omit definimos que propiedade queremos excluir
 */
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

/**
 * Con Pick escogemos cuales son las propiedades que queremos
 *
 * en este ejemplo examplePick sera un nuevo tipo solo con las propiedades 'color' | 'description'
 */
type examplePick = Pick<Product, 'color' | 'description'>;

/**
 * Partial nos permite creat un objeto pero vuelve todos sus campos obcionales
 */
export interface UpdateProductDto extends Partial<CreateProductDto> {}

/**
 * Required es el contrario a partial, al usar required deja que todo los campos
 * como obligatorios
 */
type exampleRequired = Required<Product>;

/**
 * Con readonly definimos que todos los parametros seran de solo lectura
 * por lo tanto no nos permitira modificar los mismo
 * brindando seguridad
 */
export interface FindProductDto extends Readonly<Partial<Product>> {}

type example3 = Readonly<Product>;

/**
 * con el readonly no permitimos q se reasignen los valores
 * y con ReadonlyArray<T> evitamos que se realicen las funciones de mutacion del array
 */
export interface FindProductDto2
  extends Readonly<Partial<Omit<Product, 'tags'>>> {
  readonly tags: ReadonlyArray<string>;
}
