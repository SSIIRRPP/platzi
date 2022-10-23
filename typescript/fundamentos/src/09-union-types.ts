(() => {
  let userId: number | string;
  userId = 1;
  userId = 'sadf';

  function greeting(text: string | number) {
    console.log('asd');
    if (typeof text === 'string') {
      console.log(text.charCodeAt(0));
    } else {
      console.log(text.toFixed(1));
    }
  }

  greeting(12);
  greeting('asaf');
})();
