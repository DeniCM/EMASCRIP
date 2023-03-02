

function* iterate(array) {
    for (let value of array) {
        yield value;

    }
}


const it = iterate (['oscar', 'Dacid', 'ana', 'ana2', 'ana3']);
console.log (it.next().value);
console.log (it.next().value);
console.log (it.next().value);
console.log (it.next().value);

``