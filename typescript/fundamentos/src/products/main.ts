import { addProduct, calcStock } from './product.service';

addProduct({ title: 'hafsd', createdAt: new Date(), stock: 5 });
addProduct({ title: 'hafsd', createdAt: new Date(), stock: 2 });
addProduct({ title: 'hafsd', createdAt: new Date(), stock: 6 });
addProduct({ title: 'hafsd', createdAt: new Date(), stock: 8 });

console.log(calcStock());
