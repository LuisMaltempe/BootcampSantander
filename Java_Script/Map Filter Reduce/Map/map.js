const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(array, thisArg){
    return array.map(function(item ){;
        return item * this.value;
    }, thisArg)
}
const nums = [1, 2, 3, 4, 5];

console.log('This -> maçã= ', mapComThis(nums, maca));
console.log('This -> laranja= ', mapComThis(nums, laranja));

function mapSemThis(array){
    return array.map(function(item){
        return item * 36;
    });
}

console.log(mapSemThis(nums));