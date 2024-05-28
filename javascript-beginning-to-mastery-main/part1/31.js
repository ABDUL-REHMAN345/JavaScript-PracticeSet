// use const for creating array

// heap memory ["apple", "mango"] 0x11

const fruits = ["apple", "mango"]; // 0x11
// fruits[0]="kella" /** Iss ma hum address ni change kr rahy ussi address ma changings kr rahy hai is lye hum change kr skty "const" ka sath */
// fruits=["kella","Banana"]; /**{Not Allowed} Iss ma hum address change kr rahy hain iss lye hum "const" ka sath change ni kr skty kch be*/

/**Yeh jo lines likhi hai mene yeh ap relate kr skty hai last topic ma jiss ma btayeh tha apko ka heap memory kia hai address kia hai e.t.c */
fruits.push("banana");
console.log(fruits);
