(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  type Products = Array<Product>;

  const products: Products = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: 'asd',
    createdAt: new Date(),
    stock: 2,
    size: 'S',
  });

  addProduct({
    title: 'asd',
    createdAt: new Date(36126),
    stock: 2,
    size: 'S',
  });

  console.log(products);
})();
