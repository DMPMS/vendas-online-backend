import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProduct: CreateProductDto = {
  categoryId: categoryMock.id,
  image: 'lkfdjsafkldsa',
  name: 'name mock product',
  price: 25.0,
};
