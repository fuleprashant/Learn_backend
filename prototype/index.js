function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello , ${this.name}`);
};

const person1 = new Person("Alice");
person1.sayHello();

{
  /*
    In this example, sayHello is added to the Person constructor's prototype. Any object created from Person (e.g., person1) will have access to the sayHello method through the prototype.
*/
}

