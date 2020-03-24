var title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

country = country.toUpperCase();

var adress1 = title + ' ' + name + ' ' + surname + "\n"
             + 'ul. ' + street +"\n"
             + zip + ' ' + city +"\n"
             + country;

var adress2 = `${title} ${name} ${surname} \nul.${street} \n${zip} ${city} \n${country}`;

console.log(adress1);
console.log(adress2);