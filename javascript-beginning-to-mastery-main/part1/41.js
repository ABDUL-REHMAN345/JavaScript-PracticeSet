// object destructuring

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};
// band.bandName="queen"; /**{Change in Constant} */
// band={bandName:"queen"}; /**{Not Changed} */

// Step=1:
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName,famousSong);
// console.log(bandName);
// console.log(famousSong);
// bandName="queen"; /**{Not Changed} in "const" case in "let" case change*/

// Step=2:
let { bandName:var1, famousSong:var2, ...restProps } = band;
// console.log(bandName);
// console.log(restProps);


// In case value change...
console.log(var1); 
console.log(var2);
console.log(restProps);


