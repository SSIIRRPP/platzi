(() => {
  const calcTotal = (prices: number[]): number => {
    return prices.reduce((a, b) => a + b, 0);
  };
  console.log(calcTotal([1, 2, 3, 4, 4]));

  const printTotal = (prices: number[]): void => {
    console.log(calcTotal(prices));
  };

  printTotal([12, 234, 2352, 352, 354]);
})();
