const nos = [1,2,3,4,5];

//map function
const square = nos.map(function(val, index, arr) {
    console.log(val*val);
    //console.log(index);
    //console.log(arr);
    if(val%2 === 0) {
        return val*val;
    }

    //return val*val;
});

console.log(nos, square);

//filter function
const evenNos = square.filter(function(val, index, arr) {
    return val !== undefined;
});

console.log(evenNos, square);


//using arrow function
const evenNumbers = square.filter((val, index, arr) => val !== undefined);
console.log(evenNumbers);