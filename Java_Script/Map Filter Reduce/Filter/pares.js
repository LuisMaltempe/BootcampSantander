function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [37, 28, 20, 45, 44, 2, 10, 15];

console.log(filtraPares(meuArray));