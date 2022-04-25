 //const cipher = {cifra};

 //export default cifra()
 export { cifra as default }
 //export { nome1, nome2, …, nomeN}; para exportat + de uma função 
 

function cifra (frase){
  // the acumullator 
  let solution = "";
  // loop through the string 
  for(let i=0; i< frase.length; i++){
    let ascii = frase[i].charCodeAt();

     if(ascii >= 65 && ascii <= 77 ){
        solution += String.fromCharCode(ascii + 13);
     }else if(ascii >= 78 && ascii <= 90){
         solution += String.fromCharCode(ascii - 13)
     } else {
     solution += frase[i];
    }   
  }
   return document.getElementById('resultPrincipal').innerHTML = 
   `<div id="resultPrincipal">
    <p >Sua mensagem é  : ${solution} </p>
  </div>`;
}
