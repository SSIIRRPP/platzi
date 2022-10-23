(() => {
  const login = (data: { email: string; password: string }): void => {
    console.log(data.email, data.password);
  };

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'asd',
    createdAt: new Date(),
    stock: 2,
    size: 'S',
  });

  console.log(products);
})();
