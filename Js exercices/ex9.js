/*Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro.*/

const toLowerCaseKeys = (obj) => {
    
    return updatedObj =  Object.keys(obj).reduce((item, key) => {
        item[key.toLowerCase()] = obj[key];
        return item;
    }, {})}

console.log(toLowerCaseKeys({ NamE: 'Charles', ADDress: 'Home Street' }));