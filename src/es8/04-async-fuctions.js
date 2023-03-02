const fnAsync = () => {
    return new Promise ((resolve, reject)=> {
        (true)
        ? setTimeout (()=> resolve('asynC!!'),2000)
        : reject(new error('error!'));

    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');

}

console.log('Before');
anotherFn();
console.log('after');

``