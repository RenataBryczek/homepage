import podatek, { calculate as superCalculate } from "./calculate";
import differenceInDays from "date-fns/differenceInDays";


const firstName = 'Renia';
const age = 164;

console.log(podatek);

console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

//alert('! to strona moja, ale nie Twoja :)'); <-- to jest funkcja rzucająca tekstem na twarz i można kliknąć OK

const header = document.querySelector('.page-header__heading--js');

const calculate = () => 'hej hej obliczam';

console.log(calculate());
console.log(superCalculate(12));


console.log(header);
console.log(header.innerHTML); //tu już się odnosimy do samej wartości

header.innerHTML = '.bez strąka stronka'; //<-- można skryptami zmienić treść

console.log(header.innerHTML);

//header.style.color = 'tomato'// <-- można skryptami zmieniać style
console.log(header.style)

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle('navigation--open');
})

const result = differenceInDays(
    new Date(2023, 8, 24, 0, 0),
    new Date()
)

console.log(result);
