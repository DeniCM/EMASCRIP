var lastName = "david"
 lastName = 'oscar'
 console.log(lastName)

let fruit = 'apple'
fruit = 'kiwi'
console.log(fruit)


const animal = 'cat'
animal = 'dog'
console.log(animal)


const fruits = () => {
    if (true) {
        var fruit1 = 'apple' //fuction scope
        let fruit2 = 'kiwi' //blockscope
        const fruit3= 'banana'//blockscope

    }
    console.log(fruit1)
    console.log(fruit2)
    console.log(fruit3)
}

fruits();