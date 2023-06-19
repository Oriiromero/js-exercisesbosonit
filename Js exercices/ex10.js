//Crea una función que elimine las etiquetas html o xml de un string. La función debe tener un string como único parámetro.

function removeHTMLTags(string){
    let updatedStr = string.replace(/(<([^>]+)>)/ig, '');

    return updatedStr;
}

console.log(removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'));