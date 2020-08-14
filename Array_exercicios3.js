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
/*
elaborar um programa que leia 20 elementos numéricos inteiros em uma mariz A do tipo vetor. Construir uma matriz B de mesma dimensão com os elementos da matriz A + 2 elementos. Colocar os elementos da matriz B em ordem cresente. Montar um trecho de pesquisa binária para pesquisar os elementos armmazenados na matriz B.
*/

console.log('Exercício 06');
var matriz06A = []
var matriz06B = []
for (var i = 0; i < 20; i++){
    matriz06A.push(Math.floor(Math.random () * 25 + 1));
}
for (var i = 0; i < matriz06A.length; i++){
    matriz06B.push(matriz06A[i]);
}
matriz06B.push(Math.floor(Math.random () * 25 + 1));
matriz06B.push(Math.floor(Math.random () * 25 + 1));
console.log(matriz06A);
console.log(matriz06B);;

for (var i = 0; i < matriz06B.length -1; i++){
    for (var j = i + 1; j < matriz06B.length; j++){
        var x;
        if (matriz06B[i] > matriz06B[j]){
            x = matriz06B[i];
            matriz06B[i] = matriz06B[j];
            matriz06B[j] = x;
        }
    }
}
console.log('Matriz B crescente: '+matriz06B);

function fbinaria06 (param){
        var comeco = 1;
        var meio;
        var final = matriz06B.length;
        var achar = false;
        while (comeco <= final && achar == false){
            meio = parseInt((comeco + final) / 2);
            if (param == matriz06B[meio]){
                achar = true;
            }else{
                if (param < matriz06B[meio]){
                    final = meio - 1;
                }else{
                    comeco = meio + 1;
                }
            }
        }
    if (achar == true){
        console.log(`FBinária: O número ${param}, foi localizado na posição ${meio}.`);
    }else{
        console.log(`FBinária: ${param}, não foi localizado.`);
    }
}
fbinaria06(20);

/*
Escrever um programa que leia 20 elementos númericos inteiros negativos em uma matriz A do tipo vetor. Construir uma matriz B de mesmo, tipo e dimensão, em que cada elemento deve ser o valor positivo do elemento correspondente da matriz A. Desta forma, se em A[1] estiver armazenado o elemento -3, deve estar em b[1] o valor 3, e assim por diante. Apresentar os elementos da matriz B em ordem decrescente.
*/
console.log('Exercício 07');
var matriz07A = []
var matriz07B = []
for (var i = 0; i < 20; i++){
    matriz07A.push(Math.floor(Math.random() * 25 +1))
}
console.log('Matriz A: '+matriz07A);
function fnegativa07 (param){
    param *= -1;
    return param;
}
for (var i = 0; i < matriz07A.length; i++){
    matriz07B.push(fnegativa07(matriz07A[i]));
}
console.log('matriz B: '+matriz07B);
function fDecrescente07 (param){
    for (var i = 0; i < matriz07B.length -1; i++){
        for (var j = i + 1; j < matriz07B.length; j++){
            var x;
            if (matriz07B[i] > matriz07B[j]){
                x = matriz07B[i];
                matriz07B[i] = matriz07B[j];
                matriz07B[j] = x;
            }
        }
    }
    return matriz07B;
}
console.log('Ordem decrescente: '+fDecrescente07(matriz07B));

/*
Elaborar programa que leia 15 elementos inteiros em uma matriz A. Construir uma matriz B de mesmo tipo e tamanho, em que cada elemento da matriz B seja a metade absoluta de cada elemento da matriz A. Apresentar os elementos na matriz A em ordem decrescente e os de B em ordem crescente.
*/
console.log('Exercício 08');
var matriz08A = [];
var matriz08B = [];
for (var i = 0; i < 15; i++){
    matriz08A.push(Math.floor(Math.random() * 25 + 1));
}
function fmetade08 (param){
    return param /2;
}
for (var i = 0; i < matriz08A.length; i++){
    matriz08B.push(fmetade08(matriz08A[i]));
}
console.log('Matriz A original: '+matriz08A);
console.log('Matriz B = A/2: '+matriz08B);
function fDecrescente08 (param){
    for (var i = 0; i < matriz08A.length; i++){
        for (var j = i +1; j < matriz08A.length; j++){
            var x;
            if (matriz08A[i] < matriz08A[j]){
                x = matriz08A[i];
                matriz08A[i] = matriz08A[j];
                matriz08A[j] = x; 
            }
        }
    }
    return matriz08A;
}
console.log('Matriz A decrescente: '+fDecrescente08(matriz08A));
function fCrescente08 (param){
    for (var i = 0; i < matriz08B.length; i++){
        for (var j = i + 1; j < matriz08B.length; j++){
            var x;
            if (matriz08B[i] > matriz08B[j]){
                x = matriz08B[i];
                matriz08B[i] = matriz08B[j];
                matriz08B[j] = x;
            }
        }
    }
    return matriz08B;
}
console.log('Matriz B crescente: '+fCrescente08(matriz08B));

/*
Elaborar um programa que leia duas matrizes A e B do tipo vetor com 15 elementos inteiros cada. Construir duas outtras matrizes C e D de mesmo tipo. Cada elemento da matriz C deve ser o somatório do elemento correspondente da matriz A, e cada elemento da matriz D deve ser 
o fatorial do elemento da matriz B. Em seguida, construir uma matriz E, que deve conter a diferença dos elementos das matrizes C e D com a soma dos elementos das matrizes A e B. Apresentar os elementos da matriz E em ordem crescente.
*/

console.log('Exercício 09');
var matriz08A = [];
var matriz08B = [];
var matriz08C = [];
var matriz08D = [];
var matriz08E = [];
var subtracao = [];
var adicao = [];
for (var i = 0; i < 15; i++){ //criação das matrizes A e B ok
    matriz08A.push(Math.floor(Math.random() * 25 + 1));
    matriz08B.push(Math.floor(Math.random() * 25 + 1));
}

//cada elemento da matriz C deve ser o somatório correspondente da matriz A
function fsomatorio08 (param){
    n = param;
    somatorio = 0;
    while ( n > 0){
        somatorio += n;
        n -= 1;
    }
    return somatorio;
}

for (var i = 0; i < matriz08A.length; i++){
    matriz08C.push(fsomatorio08(matriz08A[i]));
}

//matriz D deve ser fatorial de cada elemento da matriz B
function ffatorial (param){
    n = param;
    fatorial = 1;
    while (n > 0){
        fatorial *= n;
        n -= 1;
    }
    return fatorial;
}
for (var i = 0; i < matriz08B.length; i++){
    matriz08D.push(ffatorial(matriz08B[i]));
}

// Matriz E, deve conter a diferença dos elementos das matrizes C e D com a soma dos elementos das matrizes A e B.

for (var i = 0; i < matriz08C.length; i++){ //primeiro fiz subtração de C - D.
    subtracao.push(matriz08C[i]-matriz08D[i])
}

for (var i = 0; i < matriz08A.length; i++){ //segundo realizei adição de A + B.
    adicao.push(matriz08A[i]+matriz08B[i])
}

for (var i = 0; i < adicao.length; i++){
    matriz08E.push(adicao[i]+subtracao[i]);
}

//Apresentar os elementos da matriz E em ordem crescente.

function fcrescente08 (param){
    for (var i = 0; i < matriz08E.length - 1; i++){
        for (var j = i + 1; j < matriz08E.length; j++){
            var x;
            if (matriz08E[i] < matriz08E[j]){
                x = matriz08E[i];
                matriz08E[i] = matriz08E[j];
                matriz08E[j] = x;
            }
        }
    }
    return matriz08E;
}


console.log('Matriz A: '+matriz08A);

console.log('Matriz B: '+matriz08B);

console.log('Matriz C = somatorio (matriz A(n)): '+matriz08C);

console.log('matriz D = fatorial(B): '+matriz08D);

console.log('matriz E = ((C-D) + (A+B))'+matriz08E);

console.log('Matriz E ordem crescente: '+fcrescente08(matriz08E));

/*
Elaborar um programa que leia duas matrizes A e B de uma dimensão do tipo vetor com dez elementos inteiros cada. Construir uma matriz C de mesmos tipo e dimensão que seja formada pela soma dos quadrados de cada elemento corresponde das matrizes A e B. Apresentar a matriz C em ordem decrescente.
*/

console.log('Exercício 10');
var matriz10A = [];
var matriz10B = [];
var matriz10C = [];
var matriz10ADobr = []
var matriz10BDobr = []
for (var i = 0; i < 10; i++){ //matrizes A e B de uma dimensão do tipo vetor com dez elementos inteiros cada.
    matriz10A.push(Math.floor(Math.random() * 25 + 1));
    matriz10B.push(Math.floor(Math.random() * 25 + 1));
}

//Construir uma matriz C de mesmos tipo e dimensão que seja formada pela soma dos quadrados de cada elemento corresponde das matrizes A e B.
function dobrar (param) { //poderia ter feito função anonima.
    return param * 2;
}
for (var i = 0; i < matriz10A.length; i++){ //poderia ter usado método MAP, porém estou evitando métodos internos ok.
    matriz10ADobr.push(dobrar(matriz10A[i]));
    matriz10BDobr.push(dobrar(matriz10B[i]));
}
for (var i = 0; i < matriz10ADobr.length; i++){
    matriz10C.push(matriz10ADobr[i]+matriz10BDobr[i]);
}

//Apresentar a matriz C em ordem decrescente.
function fdescrescente10 (param){
    for(var i = 0; i < matriz10C.length -1; i++){
        for (var j = i +1 ;j < matriz10C.length; j++){
            var x;
            if (matriz10C[i] < matriz10C[j]){
                x = matriz10C[i];
                matriz10C[i] = matriz10C[j];
                matriz10C[j] =x;
            }
        }
    }
    return matriz10C;
}
console.log('matriz A: '+matriz10A);
console.log('A * 2: '+matriz10ADobr);
console.log('matriz B: '+matriz10B);
console.log('B * 2: '+matriz10BDobr);
console.log('Matriz C = (A *)+ (B*2): '+matriz10C);
console.log('Matriz C decrescente: '+fdescrescente10(matriz10C));

/*
Elaborar um programa que leia duas matrizes A e B de uma dimensão do tipo vetor com 12 elementos reais cada. Construir uma matriz C de mesmo tipo e dimensão que seja formada pelo
produto de cada elemento correspondentes às matrizes A e B. Montar o trecho de pesquisa sequencial para pesquisar os elementos existentes na matriz C.
*/
console.log('Exercício 11');
var matriz11A = [];
var matriz11B = [];
var matriz11C = [];
for (var i = 0; i < 12; i++){
    matriz11A.push(Math.floor(Math.random() * 25 + 1));
    matriz11B.push(Math.floor(Math.random() * 25 + 1));
}
console.log('Matriz A: '+matriz11A);
console.log('Matriz B: '+matriz11B);
for (var i = 0; i < matriz11A.length; i++){
    matriz11C.push(matriz11A[i]+matriz11B[i]);
}
console.log('Matriz C: '+matriz11C);
function fsequencial11 (param){
    for(var i = 0; i < matriz11A.length; i++){
        if (param == matriz11C[i]){
            console.log(`O número ${param}, está localizado na posição ${i}.`)
        }else{
            console.log(`Número não localizado na posição ${i}`);
        }
    }
}
fsequencial11(42);

/*
Elaborar um programa que eia três matrizes A, B e C de uma dimensão do tipo vetor com 15 elementos inteiros cada. Construir uma matriz D de mesmo tipo e dimens~ao que seja formada pela soma dos elementos corrrespondentes às matrizes A, B e C. Montar o trecho de pesquisa binária para pesquisar os elementos existentes na matriz D.
*/
console.log('Exercício 12');
var matriz12A = [];
var matriz12B = [];
var matriz12C = [];
var matriz12D = [];
for (var i = 0; i < 15; i++){
    matriz12A.push(Math.floor(Math.random() * 25 +1));
    matriz12B.push(Math.floor(Math.random() * 25 +1));
    matriz12C.push(Math.floor(Math.random() * 25 +1));
}
for (var i = 0; i < matriz12A.length; i++){
    matriz12D.push(matriz12A[i]+matriz12B[i]+matriz12C[i]);
}
function FBinária12 (param) {
    var comeco = 1;
    var final = matriz12D.length;
    var meio;
    var achar = false;
    while (comeco <= final && achar == false){
        meio = parseInt((comeco + final) / 2);
        if (param == matriz12D[meio]){
            achar = true;
        }else{
            if (param < matriz12D[meio]){
                final = meio - 1;
            }else{
                comeco = meio + 1;
            }
        }
    }
    if (achar == true){
        console.log(`FBinária: O número ${param}, foi localizado na posição ${meio}.`);
    }else{
        console.log(`FBinária: ${param}, não foi localizado.`);
    }
}
console.log('Matriz A: '+matriz12A);

console.log('Matriz B: '+matriz12B);

console.log('Matriz C: '+matriz12C);

console.log('Matriz D = A+B+C: '+matriz12D);

FBinária12(42);
/*
Escrever um programa que leia 15 elementos do tipo inteiro em uma matriz A e apresentar os elementos da matriz utilizando a pesquisa binária.
*/
console.log('Exercício 13');
var matriz13 = []
for (var i = 0; i < 13; i++){
    matriz13.push(Math.floor(Math.random() * 25 + 1));
}
console.log(matriz13);

function FBinaria13 (param) {
    var comeco = 1;
    var final = matriz13.length;
    var meio;
    var achar = false;
    while (comeco <= final && achar == false){
        meio = parseInt((comeco + final) / 2);
        if (param == matriz13[meio]){
            achar = true;
        }else{
            if (param < matriz13[meio]){
                final = meio - 1;
            }else{
                comeco = meio + 1;
            }
        }
    }
    if (achar == true){
        console.log(`FBinária: O número ${param}, foi localizado na posição ${meio}.`);
    }else{
        console.log(`FBinária: ${param}, não foi localizado.`);
    }
}

FBinaria13(20);