(() => {
  let productTitle = 'asdfasdf';
  console.log('productsTitle: ', productTitle);

  let productDescription = 'asdfasdf';
  console.log('productDescription: ', productDescription);

  let productPrice = 200;
  let isNew = false;

  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;

  console.log('summary: ', summary);
})();
