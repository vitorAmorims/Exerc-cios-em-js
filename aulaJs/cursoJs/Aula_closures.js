/*
caract:
1 - lexical scope. (function filhas tem visibilidade das variaveis da function pai.)
2 - Memorização de escopo que ela foi criada. 
3 criar funções e variáveis privadas sem classes.
*/
//exemplo escopo léxico em javascript
function init() {
    var name = "Mozilla";
    function displayName() { //o retorno da função init é uma nova função 
      console.log(name); // closure consegui enxergar o escopo da variável na função pai
    }
    displayName();
}
init();
//displayName(); está função da erro porque só está disponível dentro do corpo da função pai init.

// outro exeplo de escopo léxico closure
//Obs: neste caso a função interna displayName() conseguiu enxergar a variavel name que foi criada no escopo da função pai makefunc()
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  var myFunc = makeFunc(); // atribibuindo função para variavel 
  myFunc(); //chamando função pela variavel

