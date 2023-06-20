/*Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La función debe tener 2 parámetros:
Primer parámetro debe ser el número de bytes
Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.
 */

function bytesConvertor(bytes, num = 3) {
  if (bytes < 0) {
    return "Negative numbers can't be converted!";
  }

  const units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let size = bytes;
  let index = 0;

  for (index = 0; size >= 1000; index++) {
    size /= 1000;
  }

  return `${size.toPrecision(num)}${units[index]}`;
}

console.log(bytesConvertor(1000));
console.log(bytesConvertor(123456789));
console.log(bytesConvertor(-12145489451.5932, 5));
