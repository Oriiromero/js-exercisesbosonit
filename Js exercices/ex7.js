/*Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:
Primer parámetro es un objeto con x número de campos y valores
Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
*/
function falsyData(obj, func){
    const falseData = [];

    for(const item in obj){
        if(obj.hasOwnProperty(item)){
            const val = obj[item];

            if(!func(val)){
                falseData.push(item);
            }
        }
    }
    return falseData;
}