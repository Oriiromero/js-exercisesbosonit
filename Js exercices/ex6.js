/*Crea una función que redondee un número float a un número específico de decimales. 
- La función debe tener dos parámetros: 
- Primer parámetro es un número float con x decimales
- Según parámetro es un int que indique el número de decimales al que redondear
- Evitar usar el método toFixed()*/

const roundTo = (val, decimals) => {
    let numOfDecimals = 1;
    for(let i = 0; i < decimals; i++){
        numOfDecimals*= 10;
    }
    val = Math.round(val * numOfDecimals) / numOfDecimals;
    return val;
}
console.log(roundTo(1.123456789, 6));
