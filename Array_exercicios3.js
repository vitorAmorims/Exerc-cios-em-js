/*
Elaborar um programa que leia 12 elementos númericos inteiros em uma matriz do tipo vetor. coloque-os em ordem decrescente e apresente os elementos ordenados.
*/
console.log('Exercício 1');
var matriz01 = [];
for (var i = 0; i < 12; i++){
    matriz01.push(Math.floor(Math.random() * 25 +1));
}
console.log('Ordem normal: '+matriz01);
for (var i = 0; i < matriz01.length -1; i++){
    for (var j = i + 1; j < matriz01.length; j++){
        var x;
        if (matriz01[i] < matriz01[j]){
            x = matriz01[i];
            matriz01[i] = matriz01[j];
            matriz01[j] = x;
        }
    }
}
console.log('Ordem decrescente: '+matriz01);

/*Elaborar um programa que leia oito elementos numéricos inteiros em uma matriz A de uma dimensão do tipo vetor. Construir uma matriz B de mesmo tipo e dimensão com os elementos de matriz A multiplicados por 5. Montar uma rotina de pesquisa binária para pesquisar os elementos de matriz B.
*/
console.log('Exercício 2');
var matriz02 = [];
var matriz02B = [];
for (var i = 0; i < 8; i++){
    matriz02.push(Math.floor(Math.random () * 25 + 1));
}
console.log('Origem: '+matriz02);

for (var i = 0; i < matriz02.length; i++){
    matriz02B.push(matriz02[i] * 5);
}

console.log('Retorno: '+matriz02B);

/*Costruir um programa que leia 15 elementos numéricos inteiros em uma matriz A de uma dimensão do tipo vetor. Construir uma matriz B de mesmo tipo e dimensão, em que cada elemento seja fatorial do elemento correspondente armazenado na matriz A. Apresentar os elementos da matriz B ordenados em ordem crescente.
*/
console.log('Exercício 03')
var matriz03A = [];
var matriz03B = [];
for (var i = 0; i < 15; i++){
    matriz03A.push(Math.floor(Math.random () * 25 + 1));
}


function function_Fatorial (param){
    var n = param;
    var fatorial = 1
    while (n > 0){
        fatorial *= n;
        n -= 1;
    }
    return fatorial;
}

for (var i = 0; i < matriz03A.length; i++){
    matriz03B.push(function_Fatorial(matriz03A[i]));
}
console.log('Origem: '+matriz03A);
console.log('Fatorial: '+matriz03B);

for (var i = 0; i < matriz03B.length -1; i++){
    for (var j = i +1; j < matriz03B.length; j++){
        var x;
        if (matriz03B[i] > matriz03B[j]){
            x = matriz03B[i];
            matriz03B[i] = matriz03B[j];
            matriz03B[j] = x; 
        }
    }
}
console.log('Ordenação crescente: '+matriz03B)

/*
Elaborar um programa que leia uma matriz A com 12 elementos do tipo real. Após a leitura da matriz A, colocar em ordem crescente. Depois, fazer a leitura de uma matriz B com também 12 elementos do tipo real e colocar os elementos em ordem crescente. Construir uma matriz C, em que cada elemento seja a soma dos elementos das matrizes A e B. Colocar em ordem decrescente os elementos da matriz C e apresentar os valores.
*/
console.log('Exercício 04');
var matriz04A = [];
var matriz04B = [];
var matriz04C = [];
for (var i= 0; i < 12; i++){
    matriz04A.push(Math.floor(Math.random () * 25 + 1));
    matriz04B.push(Math.floor(Math.random () * 25 + 1));
}
console.log('Matriz A: '+matriz04A);
console.log('Matriz B: '+matriz04B);

function fcrescente04 (param){
    for (var i = 0; i < 11; i++){
        for (var j = i + 1; j < 12; j++){
            var x;
            if (param[i] > param[j]){
                x = param[i];
                param[i] = param[j];
                param[j] = x;
            }
            
        }
    }
    return param
}
console.log('Matriz A ordem crescente: '+fcrescente04(matriz04A));        

console.log('Matriz B ordem crescente: '+fcrescente04(matriz04B));
for (var i = 0; i < matriz04A.length; i++){
    matriz04C.push(matriz04A[i]+matriz04B[i]);
}
console.log('Matriz C - soma de A e B: '+matriz04C);

function fdecrescente04 (param){
    for (var i = 0; i < param.length -1; i++){
        for (var j = i +1; j < param.length; j++){
            var x;
            if (param[i] < param[j]){
                x = param[i];
                param[i] = param[j]
                param[j] = x;
            }
        }
    }
    return param;
}
console.log('Matriz decrescente: '+fdecrescente04(matriz04C));

/*
Escrever um programa que leia duas matrizes A e B do tipo vetor com elementos do tipo cadeia, sendo a matriz com 20 elementos e matriz B com 30 elementos. Construir uma matriz C, sendo esta a junção das matrizes A e C. Desta forma, a matriz C deve ter a capacidade de armazenar 50 elementos. Apresentar os elementos da matriz C em ordem decrrescente.
*/
console.log('Exercício 05');
var matriz05A = [];
var matriz05B = [];
var matriz05C = [];
for (var i = 0; i < 20; i++){
    matriz05A.push(Math.floor(Math.random () * 25 + 1));
}
for (var i = 0; i < 30; i++){
    matriz05B.push(Math.floor(Math.random () * 25 + 1));
}
function incluirMatriz (param){
    for (var i = 0; i < param.length; i++){
        matriz05C.push(param[i]);
    }
    return param
}
console.log('matriz A: '+matriz05A);
console.log('matriz B: '+matriz05B);
incluirMatriz(matriz05A);
incluirMatriz(matriz05B);
console.log('Matriz C junção A e B: '+matriz05C);

/*
Elaborar um programa que leia 30 elementos numéricos reais em uma matriz A do tipo vetor. Construir uma matriz B de mesmo tipo, observando a seguinte lei de formação: todo elemento da matriz B deve ser o cubo do elemento correspondente da matriz A. Montar o trecho de pesquisa sequencial para pesquisar os elementos formados na matriz B.
*/
console.log('Exercício 06');
var matriz06A = [];
var matriz06B = [];
for (var i = 0; i < 30; i++){
    matriz06A.push(Math.floor(Math.random () * 25 + 1));
}
for (var i = 0; i < matriz06A.length; i++){
    matriz06B.push(Math.pow(matriz06A[i],3));
}
console.log('matriz A: '+matriz06A);
console.log('matriz B: '+matriz06B);

function Fpesquisa06A (param){
    for (var i = 0; i < matriz06A.length; i++){
        if (param == matriz06A[i]){
            console.log(`Número ${param}, localizado na posição ${i} da matriz A.`);
        }else{
            console.log(`Número não loalizado na matriz A, posição ${i}.`);
        }
    }
}
Fpesquisa06A(5);
function Fpesquisa06B (param){
    for (var i = 0; i < matriz06B.length; i++){
        if (param == matriz06B[i]){
            console.log(`Número ${param}, localizado na posição ${i} da matriz B.`);
        }else{
            console.log(`Número não loalizado na matriz B, posição ${i}.`);
        }
    }
}
Fpesquisa06B(8);