/*
Para criar uma matriz 2D em javascript, podemos criar uma matriz primeiro e, em seguida, adicionar matrizes como seus elementos. Esse método retornará um array 2D com o número de linhas e colunas específicado.
*/

//Primeiro vamos exemplificar os passos manuais para criação de uma matriz.
var matriz = new Array;
var numeros = [3,4,5]; //criar array e os seus elementos
var numeros1 = [4,7,9]; 

matriz.push(numeros); //incluir os array numeros e numeros1 em outra array matriz.
matriz.push(numeros1); 

//console.table(matriz); //Observe os indices e seus respectivos valores.

//Agora vamos criar uma matriz m X n (bidimensional) com estruturas de repetição e valores aleátorios.

function createMat2D (linhas,colunas, randon){ // passando três parâmetros de referência
    var matrizA = []; //declarando e atribuindo valor à variável 
    for (let i = 0; i < linhas; i++){
        matrizA.push([]);
        matrizA[i].push(new Array(colunas)); //usando indice, para criar as colunas.
        for (let j = 0; j < colunas; j++){
            matrizA[i][j] = (Math.floor(Math.random() * 25 + 1)); //atribuindo valores aleatórios.
        }
    }
    return matrizA;
}
console.table(createMat2D(3,3));
