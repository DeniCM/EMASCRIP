
// enhaced object literals 

function newUser (user, age , country){
    return {
        user: 'user',
        age: 36,
        country: Mx
    }

}

function newUser (user, age , country , uId){
    return {
        user,
        age,
        country,
        id: uId
    }

}

console.log(newUser('gndx', 34 , 'mx', 1));

