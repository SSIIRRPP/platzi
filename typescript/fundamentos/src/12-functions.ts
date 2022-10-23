(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const createProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const producto1 = createProductToJson('asdf', new Date(), 43, 'M');
  producto1.createdAt.getDate();
})();
