const nota = 80;
let resultado = "" ;

if (nota >= 80){
    resultado = 'Parabéns, você foi aprovada' ;
} else if ( nota < 80 && nota >= 60 ){
    resultado = 'Você está na nossa lista de espera' ;
} else if ( nota < 60 ){
    resultado = 'Você foi reprovada(o)' ;
}

console.log(resultado);
