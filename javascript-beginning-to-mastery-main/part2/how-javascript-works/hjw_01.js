
// compilation/compilation phase: => Tokenizing/lexing => parsing => code generation
// parsing(yeh aik AST bnatta hai(Abstract Syntax Tree))=>wo code jo lexing matlb tuqro ma bnna hai unko smj ka aik Abstract Syntax Tree ma convert krtta hai.













// code execution =>JS ma code 
// parsing divided into sub types => AST(Abstract Syntax Tree)
// baqqi language ma (interpreter) hotta hai code jessy k line by line check krta hai lakin JS ma essa ni hotta.
// Ecma Script ki official documention: ma btayeh gyah hai ka (phella Early error checking ho code ki) r dusarra (jitna be variable hai wo kiss scope ko belong krta hain) mean => Determine Appropriate scope variable.

// why compilation 


// How javascript code executes 


// what is global exection context ? 
// what is local execution context ? 
// closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Harshit";
console.log(firstName);