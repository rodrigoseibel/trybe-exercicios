function trocaTexto () { 
    const p = document.getElementsByTagName('p')[1];
    p.innerText = 'mudar  dsds  meu nome pra xablau';

  }
  trocaTexto()
  // document.getElementsByTagName(p)[1].innerText = 'asdas'; \\

//   Exercicio 2 //

  function trocaBack(){
    const a = document.getElementsByClassName('main-content')[0];
    a.style.background = 'rgb(76,164,109)';


  }
  trocaBack ()


  //Exercicio 3//

  function trocaCor (){
    const c = document.getElementsByClassName('center-content')[0];
    c.style.background = 'white';

  }
  trocaCor()

//   Exercicio 4 //

  function trocaText (){
    const b = document.getElementsByTagName('h1')[0];
    b.innerText = 'Mudar o testo aleatorio';

  }
  trocaText()

//   Exercicio 5 //
  
  function trocaTexto2 (){
    const d = document.getElementsByTagName('p')[0];
    d.innerText = 'Alterando valor do texto';

  }
  trocaTexto2()