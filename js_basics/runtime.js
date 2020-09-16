console.log("app started");

//async call
setTimeout(() => {
    console.log("some work here");
}, 0);

//var
for (var i = 0; i <10; i++) {
    setTimeout(() => {
        console.log("Task", i);
    }, i *1000);
}

//let

// for (let i = 0; i <10; i++) {
//     setTimeout(() => {
//         console.log("Task", i);
//     }, i *1000);
// }

//const
const a = 12;
//a = 34;
console.log(a);

const b = {name: "test", age:12};
b.name = "test1";
console.log("printing b: ", b);


function user(firstname, lastname) {
    return {
        firstname,
        lastname,
        fullname: firstname+' ' + lastname
    }        
}

const u = user("john", "sak");
console.log(u);

const {fullname, firstname} = user("test", "test1");
console.log(fullname);

console.log("app finished");
