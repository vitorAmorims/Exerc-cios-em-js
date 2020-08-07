/*
Elab. programa que leia uma matriz A do tipo vetor com dez elementos inteiros positivos. Construir uma matriz B de mesmo tipo e dimensão, em que cada elemento da matriz B deve ser o valor negativo do mesmo correspondente da matriz A.
*/
console.log('Ex 01');
var matriz01A = [];
var matriz01B = [];
for (var i = 0; i < 10; i++){
    matriz01A.push(Math.floor(Math.random() * 25 +1))
}
matriz01B = matriz01A.map(function(item){
    return item * -1;
});
console.log(matriz01A);
console.log(matriz01B);
/*
construir um programa que calcule a tabuada de um valor qualquer de 1 até 10 e armazene os resultados em uma matriz A. Apresente os valores da matriz A.
*/
console.log('exercício 02');
var matriz02A = [];
function ftabuada (num){
    n = num;
    if (n >= 1 && n <= 10){
        cont = 1;
        total = 0;
        total = n * cont;
        matriz02A.push(total);
        console.log(`${n} x ${cont} = ${total}`)  
        while (cont < 10){
            cont++
            total = n * cont
            matriz02A.push(total)
            console.log(`${n} x ${cont} = ${total}`)
        }
    }else{
        console.log(`o valor informado não satisfaz a condição do programa`)
    }
    return total;
}

ftabuada(8); //chamando função e atribuindo parâmetro para função.
console.log(matriz02A); //incluiu o resultado da tabuada do número 8 no vetor.
ftabuada(7);//chamando função e atribuindo parâmetro para função.
console.log(matriz02A);//incluiu o resultado da tabuada do número 7 no vetor.

/*
Elaborar programa que leia 20 elementos (valores inteiros) para temperatura em graus Celsius e armazene esses valores em uma matriz A de uma dimensão. O programa O programa ao final deve apresentar a menor, a maior e a média das temperaturas lidas.
*/
console.log('Exercícío 03')
var matriz03A = new Array;
var total, media;
for (var i = 0; i < 20; i++){
    matriz03A.push(Math.floor(Math.random() * 25 + 1));
}
console.log('Normal: '+matriz03A);
matriz03A.sort();   
console.log('O método sort, não ordenou corretamente '+matriz03A);
/*
A grande questão é que a função sort() usa por padrão a ordenação alfabética baseada na tabela Unicode. Apesar de inesperado isso está documentado. A solução é usar a nossa própria função de comparação.
*/
function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1; 
    if (a > b) return 1; 
}
console.log('própria função: '+matriz03A.sort(comparaNumeros));//ordenou o vetor corretamente.
console.log('o menor valor do vetor: '+matriz03A[0]);
matriz03A.reverse();
console.log('o maior valor do vetor: '+matriz03A[0]);
for( var i = 0; i < matriz03A.length; i++){
    total += matriz03A[i];
    media = total / matriz03A.length
}
console.log(`A media do vetor é ${media}`);
/*
Elabore um programa que leia 12 elementos inteiros para uma matriz A de uma dimensão do tipo vetor. Construir uma matriz B de mesmos tipo e dimensão, porém, todo elemento da matriz A que for impar deve ser multiplicado por 2 na matriz B, caso contrário, o elemento de matriz A deve permanecer constante.
*/
console.log('Exercício 04')
var matriz04A = new Array;
var matriz04B = [];
for (var i = 0; i < 12; i++){
    matriz04A.push(Math.floor(Math.random() * 25 + 1))
}

function fParImpar (num){
    n = num;
    if (n % 2 == 1){
        n = n * 2
    }
    return n
}

for (var i = 0; i < matriz04A.length; i++){
    matriz04B.push(fParImpar(matriz04A[i]))
}

console.log(matriz04A);
console.log(matriz04B);

/*
elaborar um programa que leia seis elementos inteiros para as matrizes A e B de uma dimensão. Construir as matrizes C e D de mesmo tipo e dimensão. A matriz C deve ser formada pelos elementos de indice ímpar das matrizes A e B, e a matriz D deve ser formada pelos elementos de indice par das matrizes A e B.
*/
console.log('Exercício 05');
var matriz05A = new Array;
var matriz05B = new Array;
var matriz05C = new Array;
var matriz05D = new Array;
for (var i = 0; i < 6; i++){
    matriz05A.push(Math.floor(Math.random () * 25 +1))
    matriz05B.push(Math.floor(Math.random () * 25 +1))
}

function fpares (num){
    n = num;
    if (n % 2 == 0){
        return (n);
    }
}

function fimpares (num){
    n = num;
    if (n % 2 == 1){
        return (n);
    }
}

for (var i = 0; i< matriz05A.length; i++){
    matriz05C.push(fpares(matriz05A[i]))
}
for (var i = 0; i< matriz05B.length; i++){
    matriz05C.push(fpares(matriz05B[i]))
}

for (var i = 0; i< matriz05A.length; i++){
    matriz05D.push(fimpares(matriz05A[i]))
}
for (var i = 0; i< matriz05B.length; i++){
    matriz05D.push(fimpares(matriz05B[i]))
}

matriz05C = matriz05C.filter(function(item){
    return item != null;
})
matriz05D = matriz05D.filter(function(item){
    return item != null;
})

console.log(matriz05A);
console.log(matriz05B);
console.log('Matriz com pares de A e B: '+ matriz05C)
console.log('matriz com impares de A e B: '+matriz05D)
/*
elaborar um programa que leia duas matrizes A e B de uma dimensão com seis elementos. A matriz A deve aceitar apenas a entrada de valores pares, enquanto a matriz B deve aceitar apenas entrada de valores impares. A entrada das matrizes deve ser validada pelo programa. Construir a matriz C que seja o resultado da junção das matrizes A e B, de modo que a matriz C contenha 12 elementos. Apresentar os elementos da matriz C.
*/
console.log('Exercício 06')
var matriz06A = [];
var matriz06B = [];
var matriz06C = [];
function felementosA (){
    for (var i = 0; i < 6; i++){
        matriz06A.push(fpares(Math.floor(Math.random() * 25 +1)))
        matriz06A = matriz06A.filter(function(item){
            return item != null
        })
    }
return matriz06A;        
}

function felementosB (){
    for (var i = 0; i < 6; i++){
        matriz06B.push(fimpares(Math.floor(Math.random() * 25 +1)));
        matriz06B = matriz06B.filter(function(item){
            return item != null
        })
    }
return matriz06B;        
}

felementosA();
felementosB();
matriz06C = matriz06A.concat(matriz06B);
console.log('Matriz A: '+matriz06A);
console.log('Matriz B: '+matriz06B);
console.log('Matriz C: '+matriz06C);
console.log(`A matriz C possui ${matriz06C.length} elementos.`)
