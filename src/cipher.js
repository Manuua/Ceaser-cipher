export { cifra as default }
//export { nome1, nome2, …, nomeN}; para exportat + de uma função 
 
function cifra (frase){
  // the acumullator 
  let solution = "";
  // loop through the string 
  for(let i=0; i< frase.length; i++){
    let ascii = frase[i].charCodeAt();

  const FIRST_ASCII_LETTER =65// A 
  const LAST_OFFSET_WITH_SUM_POSITIVE =77// M 
  const FIRST_OFFSET_WITH_NEGATIVE_SUM =78// N
  const LAST_ASCII_LETTER =90// Z
  
     if(ascii >= FIRST_ASCII_LETTER  && ascii <= LAST_OFFSET_WITH_SUM_POSITIVE ){
        solution += String.fromCharCode(ascii + 13);
     }else if(ascii >= FIRST_OFFSET_WITH_NEGATIVE_SUM && ascii <= LAST_ASCII_LETTER){
         solution += String.fromCharCode(ascii - 13)
     } else {
     solution += frase[i];
    }   
  }
   return solution;
}
