/*
Elaborar um programa que leia duas matrizes A e B, cada uma de duas dimensões com cinco linhas e três colunas para valores inteiros. Construir uma matriz C de mesma dimensão, que seja formada pela soma dos elementos da Matriz A com elementos da matriz B. Apresentar os elementos da matriz C.
*/
var matriz = new Array;
var matriz1 = new Array;
var matriz2 = new Array;
var matriz3 = new Array;
var matriz4 = new Array;

var matriz5 = new Array;
var matriz6 = new Array;
var matriz7 = new Array;
var matriz8 = new Array;
var matriz9 = new Array;


var matriz1A = new Array;
var matriz1B = new Array;
var matriz1C = new Array;
for (let i = 0; i < 3; i++){
    matriz.push(Math.floor(Math.random() * 25 +1));
    matriz1.push(Math.floor(Math.random() * 25 +1));
    matriz2.push(Math.floor(Math.random() * 25 +1));
    matriz3.push(Math.floor(Math.random() * 25 +1));
    matriz4.push(Math.floor(Math.random() * 25 +1));
}
matriz1A[0]=matriz;
matriz1A[1]=matriz1;
matriz1A[2]=matriz2;
matriz1A[3]=matriz3;
matriz1A[4]=matriz4;

for (let i = 0; i < 3; i++){
    matriz5.push(Math.floor(Math.random() * 25 +1));
    matriz6.push(Math.floor(Math.random() * 25 +1));
    matriz7.push(Math.floor(Math.random() * 25 +1));
    matriz8.push(Math.floor(Math.random() * 25 +1));
    matriz9.push(Math.floor(Math.random() * 25 +1));
}

matriz1B[0]=matriz5;
matriz1B[1]=matriz6;
matriz1B[2]=matriz7;
matriz1B[3]=matriz8;
matriz1B[4]=matriz9;

console.table(matriz1A);
console.table(matriz1B);