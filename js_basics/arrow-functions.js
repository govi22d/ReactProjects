
//arrow function
const person = {
    name:"test",
    age: 12,
    greet: function() {
        setTimeout( function() {
            console.log("greet", this)
            console.log("greet", this.name)
        }, 1000)
    },

    greetArrow: function() {
        setTimeout(() => {
            console.log("greet arrow", this)
            console.log("greet arrow", this.name)
        }, 1000)
    },
    
    greeting:function() {
        console.log("greeting", this)
        console.log("greeting hello from ", this.name);
    },
};
console.log("arrow functions");
//person.greeting();
//person.name = "john";

person.greet();
person.greetArrow();
person.greeting();