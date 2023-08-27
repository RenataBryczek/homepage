const button = document.querySelector('.header-aside__button--js')

const clickFunction = (e) => {
    const header = document.querySelector('.header-aside--js')
    console.log(e)
    header.innerHTML = '.słowa hiszpańskie ulubione moje';
}

button.addEventListener('click', clickFunction)