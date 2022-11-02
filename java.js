const div = document.querySelector('.first');

const btn = document.querySelector('.class');

const input = document.querySelector('.text');




function createDivs(par){

div.style.gridTemplateRows = `repeat(${Math.sqrt(par)}, 2fr)`;
div.style.gridTemplateColumns = `repeat(${Math.sqrt(par)}, 2fr)`;

for(i = 0;i < par; i++){
const divs = document.createElement('div');
divs.classList.add('try');
divs.style.boxSizing = 'border-box';
divs.style.backgroundColor = 'blue';
divs.style.borderStyle = 'solid';
div.appendChild(divs)

}

}


btn.addEventListener('click', () => {
    let par = prompt('How big do you want the grid');
    par =  
    createDivs(par);
} )








