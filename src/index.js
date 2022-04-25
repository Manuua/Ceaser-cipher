import cifra from './cipher.js';

// manipulação do dom feita aqui

//selecting elements 
const btnToCript = document.getElementById("button1");// button to Cript
const btnToDescript = document.getElementById("button2"); // Button to Descript
const textArea = document.getElementById("input");//Area with the msg of user 

// função para ativar buttons 
// função que desativa botões caso text Area vazio 
const active  = () => {
    if (document.getElementById("input").length !== 0) {
      document.getElementById('button1').disabled = false;
      document.getElementById('button2').disabled = false;
    } else {
      document.getElementById('button1').disabled = true;
      document.getElementById('button2').disabled = true;
    }
  };

window.onload = () => {
    document.getElementById('button1').disabled = true;
    document.getElementById('button2').disabled = true;

    document.getElementById('input').addEventListener('input', () => {
      active(btnToDescript,btnToCript);
    })
};

btnToCript.addEventListener('click', function (){
    const text = textArea.value.toUpperCase()
    cifra(text)

}) 

 btnToDescript.addEventListener('click' , function() {
    const text = textArea.value.toUpperCase()
    cifra(text)    
 })