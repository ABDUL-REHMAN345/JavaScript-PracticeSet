// spread operator
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];

// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
  // key1: "value59"//==> bd walli phella i ge key obj ma same ki print ni hotti jessy ka iss ma key1 two time hau iss lye key 1 aik br ahey ge second walli 
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj2, ...obj1, key69: "value69" };
// const newObject = { ...["item1", "item2"] };
// const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
// console.log(newObject);

// iterable:
// String,array are iterable.


