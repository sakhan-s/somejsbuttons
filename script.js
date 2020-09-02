const block = document.querySelector('.btn-block');

block.addEventListener('click', (event) => {
    if (event.target.classList.contains('first-btn')) {
        const maintext = document.getElementsByClassName('text-justify');
        maintext[0].classList.remove('invisible');
        maintext[1].classList.add('invisible');
        maintext[2].classList.add('invisible');
    }
})
block.addEventListener('click', (event) => {
    if (event.target.classList.contains('second-btn')) {
        const maintext = document.getElementsByClassName('text-justify');
        maintext[0].classList.add('invisible');
        maintext[1].classList.remove('invisible');
        maintext[2].classList.add('invisible');
    }
})
block.addEventListener('click', (event) => {
    if (event.target.classList.contains('third-btn')) {
        const maintext = document.getElementsByClassName('text-justify');
        maintext[0].classList.add('invisible');
        maintext[1].classList.add('invisible');
        maintext[2].classList.remove('invisible');
    }
})
