/*
Elaborar um programa que leia duas matrizes A e B, cada uma de duas dimensões com cinco linhas e três colunas para valores inteiros. Construir uma matriz C de mesma dimensão, que seja formada pela soma dos elementos da Matriz A com elementos da matriz B. Apresentar os elementos da matriz C.
*/
var matriz = new Array;
var matriz1 = new Array;
var matriz2 = new Array;
var matriz3 = new Array;
var matriz4 = new Array;

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

console.table(matriz1A);
