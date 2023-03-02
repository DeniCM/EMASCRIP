// arrays destructuring

let fruits = ['apple', 'banana'];
let [ a ,b ] = fruits;
console.log(a, fruits[1]);


//Object destructuring 

let user = {username: 'oscar', age: 34};
let { username, age } = user;
console.log(username , age );

console.log(username , user.age);


// spread operator 
 
let person = { name:'oscoar', age:45};
let country = 'mx'

let data = { id:1, ...person ,country}
console.log (data);


// rest 

function sum(num ,...values) {
    console.log(values);
    console.log (num + values[0]);
    return num + values[0];

}

sum (1,1,2,4);



