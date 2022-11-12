const div = document.querySelector('.first');

const btn = document.getElementById('btn');

const input = document.getElementById('myText');

const divs = document.createElement('div');
 
let color = 'red';
let mouse = 'mouseover';


function createDivs(par){
if(par > 90){
  par = 16;
}
div.style.gridTemplateRows = `repeat(${par}, 1fr)`;
div.style.gridTemplateColumns = `repeat(${par}, 1fr)`;

for(i = 0;i < Math.pow(par,2); i++){    
const divs = document.createElement('div');
divs.setAttribute('id','items');
divs.style.boxSizing = 'border-box';
divs.style.borderStyle = 'solid';
divs.style.borderWidth = 'thin';
divs.addEventListener(`${mouse}`, function() {
divs.style.backgroundColor = `${color}`; 
});
divs.addEventListener('click', function() {
  divs.style.backgroundColor = 'green'; 
  });

div.appendChild(divs);  
  }
  
}

let cl = () =>{
  createDivs(input.value)
  btn.disabled = true; 
}



let er = () =>{
  color = 'white';
}

let bl = () =>{
  color = 'blue';
}

let R = () =>{
color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`
}








