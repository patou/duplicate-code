
function outerFunction(a: number): (b: number) => number {
  return (b: number): number => a + b;
}

const add5 = outerFunction(5);

console.log(add5(2)); // 7
console.log(add5(10)); // 15

const add10 = outerFunction(10);

console.log(add10(2)); // 12


