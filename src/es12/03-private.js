
class user {
    constructor(name , age){
        this.name = name; 
        this.age = age;


    }
    //metodo

    #speak(){
        return 'hellow'
    }
    greeting(){
        return '${this.speak()} ${this.name}';
    }

    get #uAge (){
        return this.age;

    }

    set #uAge (n){
        this.age = n
    }

}

const bebeloper1 = new user ('david' , 5);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);

