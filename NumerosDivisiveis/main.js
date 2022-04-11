
function verificaValor (i ){

    if (i%5 === 0 && i%3 === 0){
        return `BuzzFizz`;
    }else if (i%3 === 0){
        return `Fizz`;
    }else if (i%5 === 0){
        return `Buzz`;
    }else if (i % 3 !== 0 || i % 5 !== 0){
        return i;
    }
}

for (let i = 0; i<=100; i++){
    console.log (i, verificaValor(i));
}