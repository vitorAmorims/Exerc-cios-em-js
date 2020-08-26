/*
Elaborar um programa que leia duas matrizes A e B, cada uma de duas dimensões com cinco linhas e três colunas para valores inteiros. Construir uma matriz C de mesma dimensão, que seja formada pela soma dos elementos da Matriz A com elementos da matriz B. Apresentar os elementos da matriz C.
*/
//criar matriz A e B com 5 X 3 de valores inteiros
var matrizA = new Array;
var matrizB = new Array;
function criarMatriz2D (linhas, colunas, random){
    for (let i = 0; i < 5; i++){
        matrizA.push([]);
        matrizB.push([]);
        matrizA[i].push(new Array(colunas));
        matrizB[i].push(new Array(colunas));
        for (let j = 0; j < 3; j++){
            matrizA[i][j] = (Math.floor(Math.random ()* 10 +1));
            matrizB[i][j] = (Math.floor(Math.random ()* 25 +1));
        }
    }
    return matrizA, matrizB;
}
criarMatriz2D(5,3);
console.table(matrizA);
console.table(matrizB);
//Construir uma matriz C de mesma dimensão, que seja formada pela soma dos elementos da Matriz A com elementos da matriz B.
function criarMatrizC (matrizA,matrizB){
    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 3; j++){
                       
        }
    }
}