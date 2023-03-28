import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseModel {
  title: string;
  image: string;
  description: string;
  stock: number;
  size?: Sizes;
  color: string;
  price: number;
  category: Category;
  isNew: boolean;
  tags: string[];
}

/**
 * Haciendo uso del utily type Omit
 * podemos crear un type o una interfaz para decirle que en base a un objeto
 * omita algunos propiedades que no son necesarias al momento de la creacion del mismo
 *
 * El el ejemplo decimos que creamoe un nuevo type a partir de la interfaz Product
 * pero omitiremos las propiedades 'id' | 'createdAt' | 'updatedAt' | 'category'
 */
type CreateProductDto = Omit<
  Product,
  'id' | 'createdAt' | 'updatedAt' | 'category'
>;

/**
 * para usar omit podemos crear un type o una interface, la diferencia
 * es que para la interface usamos exteds para definir las propiedades a omitir
 * y en la interfaz tambien podemos agregar nuevas propiedades para el objeto
 *
 * en este ejemplo estamos añadiendo que al momento de crear un producto
 * se debe omitir las propiedades 'id' | 'createdAt' | 'updatedAt' | 'category'
 * pero se debe añadir la propiedad categoryId
 */
export interface ICreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}
