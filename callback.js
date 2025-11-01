function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); 
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Hardik", sayBye);

