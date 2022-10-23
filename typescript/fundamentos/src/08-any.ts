(() => {
  let myDynamicVar: any;
  myDynamicVar = 1;
  myDynamicVar = 'asdf';
  myDynamicVar = true;
  myDynamicVar = {};
  myDynamicVar = Symbol(2343);

  myDynamicVar = 'asASGAdfsd';
  console.log('myDynamicVar: ', myDynamicVar);
  const rta = (myDynamicVar as string).toLowerCase();
  rta.charAt(1);

  myDynamicVar = 134;
  const r2ta = (<number>myDynamicVar).toFixed();
  console.log('r2ta: ', r2ta);
})();
