

const promies1 = new Promise ((resolve,reject) => reject('Reject') );
const promies2 = new Promise ((resolve,reject) => reject('resolve') );
const promies3 = new Promise ((resolve,reject) => reject('resolve2') );

Promise.allSettled([promies1,promies2,promies3])
.then(Response => console.log(Response));