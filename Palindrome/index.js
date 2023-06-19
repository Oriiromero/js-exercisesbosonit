function palindrome(str) {

    const numericStr = str.replace(/[\W_]/g,'').toLowerCase();
  
    const strReversed = numericStr.split("").reverse().join("");
  
    return numericStr === strReversed;
  }
  
  console.log(palindrome("_eye"));