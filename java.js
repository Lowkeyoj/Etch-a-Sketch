const div = document.querySelector('.first');

const btn = document.querySelector('.class');




function createDivs(){
for(i = 0;i < 15; i++){
const divs = document.createElement('div');
divs.classList.add('try');
divs.style.backgroundColor = 'green';
divs.style.height = '16px';
divs.style.width = '16px';
divs.style.display ='grid';

div.appendChild(divs);
}

}


btn.addEventListener('click', () => {
    createDivs();
} )








