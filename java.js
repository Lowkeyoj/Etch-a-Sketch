const div = document.querySelector('.first');

const btn = document.querySelector('.class');

const input = document.querySelector('.text');

const divs = document.createElement('div');





function createDivs(){

div.style.gridTemplateRows = `repeat(${Math.sqrt(256)}, 1fr)`;
div.style.gridTemplateColumns = `repeat(${Math.sqrt(256)}, 1fr)`;

for(i = 0;i < 256; i++){    
const divs = document.createElement('div');
divs.setAttribute('id','items');
divs.style.boxSizing = 'border-box';
divs.style.borderStyle = 'solid';
divs.addEventListener('mouseover', function() {
 divs.style.backgroundColor = 'red'; 
})
div.appendChild(divs);  
  }
  
}
 




btn.addEventListener('click', () => {
  // let par = prompt('How big do you want the grid');
//    par =  
    createDivs();
} )








