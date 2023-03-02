const regex = /\b(apple)+\/b/g;

const fruit = 'apple, banana, colsk, ljls, mansana, naranja';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
