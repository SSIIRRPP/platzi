(() => {
  const prices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'sdfasfd', false];
  prices.push(56);

  let products: Array<string | number | boolean> = ['hola', 1];
  products.push(true);

  let mixed: (string | number | boolean | Array<number>)[] = ['hola', true];
  mixed.push('sadf');
})();
