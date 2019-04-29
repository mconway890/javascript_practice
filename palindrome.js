// 2. given a word output true if it's a palindrome and false if it is not
//    input: A Man, A Plan, A Canal – Panama! output: true
//    input: abcd, output: false
//    NOTE: you cannot use the reverse method this time.

function palindrome(str) {
  let newStr = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  let len = newStr.length;
    for(var i=0; i < len/2; i++) {
      if(newStr[i] !== newStr[len - 1 - i]) {
        return false;
      }
    }
  return true;
}
