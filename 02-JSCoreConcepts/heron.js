// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

var p = (b + c + h)/2;
pole = Math.sqrt(p*(p-b)*(p-c)*(p-h));

let a = () => 'Pole trójkąta o bokach ' + b + ', ' + c + ' oraz ' + h + ' wynosi ' + pole;

console.log( a() );