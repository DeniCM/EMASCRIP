

const promies1 = new Promise ((resolve, reject) => reject('Reject'));
const promies2 = new Promise ((resolve, reject) => resolve('resolve'));
const promies3 = new Promise ((resolve, reject) => resolve('resolve2'));

Promise.any([promies1,promies2,promies3])
.then(response => console.log(response));``