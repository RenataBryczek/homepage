const firstName = 'Renia';
const age = 164


console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat`)

//alert('! to strona moja, ale nie Twoja :)'); <-- to jest funkcja rzucająca tekstem na twarz i można kliknąć OK

const header = document.querySelector('.page-header__heading--js')

console.log(header)
console.log(header.innerHTML) //tu już się odnosimy do samej wartości

header.innerHTML = '.bez strąka stronka' //<-- można skryptami zmienić treść

console.log(header.innerHTML)

header.style.color = 'tomato'// <-- można skryptami zmieniać style
console.log(header.style)
