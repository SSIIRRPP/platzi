import { Product, Products } from './product.model';

export const products: Products = [];

export const addProduct = (data: Product) => {
  products.push(data);
};

export const calcStock = (): number =>
  products.reduce((a, b): number => a + b.stock, 0);
