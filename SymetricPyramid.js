const printSymetricPyramid = (character) => {
  let output = '';
  let length = 8;
  let row = 8;
  let spaces = 14;

  while (length > 0) {
    for (let i = 0; i <= row - length; i++) {
      output += character;
    }
    for (let j = 1; j <= spaces; j++) {
      output += ' ';
    }
    for (let i = 0; i <= row - length; i++) {
      output += character;
    }
    console.log(output);
    output = '';
    length--;
    spaces -= 2;
  }
};

let character = 'A';
printSymetricPyramid(character);
