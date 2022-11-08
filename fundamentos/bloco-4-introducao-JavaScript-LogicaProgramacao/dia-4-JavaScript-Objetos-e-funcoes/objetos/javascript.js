//Criando Objetos//

let arrayNumbers = [10, 10, 2,];

function highestCount(arrayNumbers) {
    let contador = 0;
    let maiorNumero = 0;
    for (let indexContador = 0; indexContador < arrayNumbers.lenght; indexContador += 1 ){
      if (arrayNumbers[indexContador ]  > maiorNumero ) {
        maiorNumero = arrayNumbers[indexContador];
      } 
    }
   console.log(maiorNumero); 
  }

