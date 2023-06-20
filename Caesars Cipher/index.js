function rot13(str) {
  let phrase = str;

  for (let i = 0; i < str.length; i++) {
    let asciiCode = str.charCodeAt(i);

    if (asciiCode >= 65 && asciiCode <= 90) {
      let newAsciiCode = asciiCode < 77.5 ? asciiCode + 13 : asciiCode - 13;

      let newChar = String.fromCharCode(newAsciiCode);

      phrase = phrase.substring(0, i) + newChar + phrase.substring(i + 1);
    }
  }

  return phrase;
}

rot13("SERR PBQR PNZC");
