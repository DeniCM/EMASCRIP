
// declarando 
class User {};


//instacia se una clase 
//const neUser = newUser();

class user {
    
    //metodos
    greeting (){
        return 'Hello';
    }
};


const gndx = new user();
console.log(gndx,greeting());
const bebeloper = new user ();
console.log (bebeloper.greeting());

//cunstructor 

class user {
    //contructor
    constructor(){
        console.log('Nuevo Usuario');

    }
    greeting (){
        return 'Hello';
    }
}

const david = new user();


//this

class user {
    constructor(name){
        this.name = name;

    }
    //metodos
    speak(){
        return'hello';
    }
    greeting (){
        return  '${this.speak()} ${this.name}';
    }

}

const ana = new user ('Ana');
console.log(ana.greeting());


//setters gatters

class user {
    constructor(name , age){
        this.name = name; 
        this.age = age;


    }
    //metodo

    speak(){
        return 'hellow'
    }
    greeting(){
        return '${this.speak()} ${this.name}';
    }

    get uAge (){
        return this.age;

    }

    set uAge (n){
        this.age = n
    }

}

const bebeloper1 = new user ('david' , 5);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20)