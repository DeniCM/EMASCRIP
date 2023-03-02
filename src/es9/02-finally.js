
const anotherfuction = () => {
    return new Promise((resolve, reject) =>{
        if (true) {
            resolve ('Hey!!');
        }
        else {
            reject('whoooops!');
        }
    })
}


anotherfuction ()
.then(response=> console.log(response))
.catch( err => console.log(err))
.finally(()=> console.log('Finnaly'))
;
