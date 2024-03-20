// object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName:var1, famousSong:var2, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);


// In case value change...
console.log(var1); 
console.log(var2);
console.log(restProps);


