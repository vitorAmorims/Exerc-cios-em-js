/*
ex 1 - elaborar programa que efetue a leitura de dez nomes de pessoas em uma matriz A do tipo vetor e apresentá-los em seguida.
*/
console.log('Exercício 01');
var nomes = ['Vitor', 'Lucas', 'Silvia', 'Higor', 'Davi', 'Sandra', 'Juliana', 'Guilherme', 'Delcio', 'Neusa', 'Rubens'];

for (var i = 0; i < nomes.length -1; i++){
    console.log(nomes[i]);
}
console.clear()
/*
ex 2 - el. programa que leia oito elementos inteiros em uma matriz A do tipo vetor. Construir uma matriz B de mesma dimensão com os elementos da matriz A multiplicados por 3.
*/
console.log('Exercício 02');
var matrizEx2 = [3,5,10];
var matrizRespEx2 = matrizEx2.map(function(item){
    return item * 3;
});
console.log('matriz origem: '+matrizEx2);
console.log('matriz resposta: '+matrizRespEx2);
/*
escrever programa que leia duas matrizes A e B do tipo vetor com 20 elementos reais. Construir uma matriz C, sendo cada elementos da matriz C a subtração de um elemento da matriz A com seu correspondente na matriz B.
*/
console.log('Exercício 03');
var matrizEx3A = [];
var matrizEx3B = [];
for (var i = 0; i < 20; i++){
    matrizEx3A.push(Math.random()*25);
}
for (var i = 0; i < 20; i++){
    matrizEx3B.push(Math.random()*25);
}
var matrizEx3C = [];
for (var i = 0; i < 20; i++){
    matrizEx3C.push(matrizEx3A[i]-matrizEx3B[i]);
}
console.log('Matriz A: ' + matrizEx3A);
console.log('Matriz B: '+ matrizEx3B);
console.log('Matriz Subtração A - B: '+ matrizEx3C);
/*
ex 4 - elaborar programa que leia 15 elementos inteiros de uma matriz A do tipo vetor. Construir uma matriz B, do mesmo tipo, porém, todo elemento da matriz B deve ser o quadrado do elemento da matriz A. Apresentar os elementos das matrizes A e B.
*/
console.log('Exercício 04');
var matrizEx04A = [];
for (var i = 0; i < 15; i++){
    matrizEx04A.push(Math.floor(Math.random() * 25 + 1))
    console.log(matrizEx04A);
}
var matrizEx04B = [];
matrizEx04B = matrizEx04A.map(function(item){
    return item * 2
    console.log(item);
});
console.log('Origem: '+matrizEx04A);
console.log('Resposta: '+matrizEx04B);
/*
elaborar um programa que leia uma matriz A do tipo vetor com 15 elementos inteiros. Construir uma matriz B de mesmo tipo, e cada elemento da matriz B deve ser o resultado de fatorial de cada elemento da matriz A.
*/
console.log('Exercício 5')
var matrizEx05 = []
var matrizEx05B = [];
for (var i = 0; i < 15; i++){
    matrizEx05.push(Math.floor(Math.random() * 25 +1))
}
function fatorialNovo (matrizEx05){
    var n = matrizEx05;
    var fatorial = 1;
    while (n > 0){
        fatorial *= n;
        n -= 1;
    }
    return fatorial;
}
for (var i = 0; i < matrizEx05.length; i++){
    matrizEx05B.push(fatorialNovo(matrizEx05[i]))
}
console.log('Origem: '+matrizEx05)
console.log('Fatoriais: '+matrizEx05B);
/*
construir um programa que leia duas matrizes A e B do tipo vetor com 15 elementos quaisquer inteiro. Construir uma matriz C, sendo esta junção das matrizes A e B. Desta forma, a matriz C deve ter o dobro das matrizes A e B. Apresentar matriz C.
*/
console.log('Exercício 6');
var matriz06A = [];
var matriz06B = [];
var matriz06C = [];
for (var i = 0; i < 15; i++){
    matriz06A.push(Math.floor(Math.random() * 25 + 1));
}
for (var i = 0; i < 15; i++){
    matriz06B.push(Math.floor(Math.random() * 25 + 1));
}
matriz06C = matriz06A.concat(matriz06B);
console.log('Matriz A '+matriz06A);
console.log(matriz06A.length)
console.log('Matriz B '+matriz06B);
console.log(matriz06B.length)
console.log('Concat '+matriz06C);
console.log(matriz06C.length);
/*
elaborar programa que leia 20 elementos do tipo real em uma matriz A e construir uma matriz B com os mesmos elementos da matriz A, porém de forma invertida. 
*/
console.log('Exercício 7');
var matriz07A = [];
var matriz07B = [];
for(var i = 0; i < 20; i++){
    matriz07A.push(Math.floor(Math.random() * 25 + 1));
}
for (var i = matriz07A.length -1; i >= 0; i--){
    matriz07B.push(matriz07A[i])
}

console.log('Origem: '+matriz07A);
console.log('reverse: '+matriz07B);
/*
escrever um programa que leia três matrizes (A,B e C) de uma dimensão do tipo vetor com cinco elementos do tipo real. Construir uma matriz D, sendo está o resultado da junção das três matrizes A, B e C.
*/
console.log('Exercício 8');
var matriz08A = [];
var matriz08B = [];
var matriz08C = [];
var matriz08D = [];
for (var i = 0; i < 5; i++){
    matriz08A.push(Math.random() * 25);
    matriz08B.push(Math.random() * 25);
    matriz08C.push(Math.random() * 25);
}
matriz08D = matriz08A.concat(matriz08B,matriz08C);
console.log('matriz A: '+matriz08A);
console.log(matriz08A.length);
console.log('matriz B: '+matriz08B);
console.log(matriz08B.length);
console.log('matriz C: '+matriz08C);
console.log(matriz08C.length);
console.log('matriz D: '+matriz08D)
console.log(matriz08D.length);
/*
elaborar um programa que leia uma matriz A do tipo vetor com 20 elementos inteiros. Construir uma matriz B dos mesmos tipo e dimensão da matriz A, sendo cada elemento da matriz B o somatório de 1 até o valor do elemento correspondente armazenado na matriz A. Se o valor do elemento A[1] for 5, o elemento correspondente da matriz B[1] deve ser 15, pois o somatório do elemento da matriz A é 1+2+3+4+5. Apresentar os elementos da matriz A e B. 
*/
console.log('Exercício 09');
var matriz09A = []
var matriz09B = []
function fsomatorio (num){
    n = num;
    somatorio = 0;
    while (n > 0){
        somatorio += n;
        n -= 1;
    }
    return somatorio;
}

for (var i = 0; i < 20; i++){
    matriz09A.push(Math.floor(Math.random() * 25 +1))
}

for (var i = 0; i < matriz09A.length; i++){
    matriz09B.push(fsomatorio(matriz09A[i]));
}
console.log(matriz09A);
console.log(matriz09B);


