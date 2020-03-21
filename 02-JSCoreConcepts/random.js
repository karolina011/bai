
var randomArray = Array(10).fill().map(() => Math.round(Math.random()*(20-5)+5));

randomArray.forEach((item) => {
    console.log(item);
});