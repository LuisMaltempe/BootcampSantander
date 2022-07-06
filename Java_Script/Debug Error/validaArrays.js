function validaArrays(array, num){
    try{
        if (!array && !num) throw new ReferenceError ("envie os paramentros");

        if (typeof array !=='object') throw new TypeError("envie um parametro do tipo object");

        if (typeof num !=='number') throw new TypeError("envie um parametro do tipo number");

        if (array.length !== num) throw new RangeError("Envie um array do tamanho correto");

        return array;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é um ReferenceError");
            console.log(e.message)
            
        }else

        if(e instanceof TypeError){
            console.log("Este é um TypeError");
            console.log(e.message)
        }else

        if(e instanceof RangeError){
            console.log("Este é um RangeError");
            console.log(e.message)
        }else{
            console.log("Ocorreu um tipo de erro inesperado: "+e);
        }
    }
}

console.log(validaArrays([1, 2], 2));