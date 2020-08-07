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
        var elemento = 0
        while (matriz06A.length < 6){
            elemento = (fpares(Math.floor(Math.random() * 25 +1)))
            if (elemento > 0){
                matriz06A.push(elemento);
            }
        }
    }
return matriz06A;        
}

function felementosB (){
    for (var i = 0; i < 6; i++){
        var elemento = 0
        while (matriz06B.length < 6){
            elemento = (fimpares(Math.floor(Math.random() * 25 +1)))
            if (elemento > 0){
                matriz06B.push(elemento);
            }
        }
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

/*
Escrever um programa que leia duas matrizes A e B de uma dimensão com dez elementos. A matriz A deve aceitar apenas a entrada de valores divisiveis por 2 e 3, enquanto a matriz B deve aceitar apenas a entrada  de valores múltiplos de 5. A entrada das matrizes deve ser validada pelo programa, e não pelo usuário. Construir uma matriz C que seja o resutado da junção das matrizes A e B, de modo que contenha 20 elementos. Apresentar a matriz C.
*/
console.log('Exercício 07');
var matriz07A = [];
var matriz07B = [];
var matriz07C = [];
function felementos7A (){
    for (var i = 0; i < 10; i++){
        var elemento = 0
        while (matriz07A.length < 10){
            elemento = (Math.floor(Math.random() * 25 +1))
            if (elemento % 2 == 0 && elemento % 3 == 0){
                matriz07A.push(elemento);
            }
        }
    }
return matriz07A;        
}
felementos7A();
function felementos7B (){
    for (var i = 0; i < 10; i++){
        var elemento = 0
        while (matriz07B.length < 10){
            elemento = (Math.floor(Math.random() * 50 +1))
            if (elemento % 5 == 0){
                matriz07B.push(elemento);
            }
        }
    }
return matriz07B;        
}
felementos7B();
matriz07C = matriz07A.concat(matriz07B);
console.log('Diviseis por 2 e 3: '+matriz07A);
console.log('Múltiplos de 5: '+ matriz07B);
console.log('concatenação de A e B: '+matriz07C);
/*
Construir um programa que leia uma matriz A de uma dimensão do tipo vetor com 30 elementos do tipo inteiro. Ao final do programa, apresentar a quantidade de valores pares e impares existentes na referida matriz.
*/
console.log('Exercício 08');
var matriz08A = [];
var pares;
var impares;
var contPar = 0;
var contImpar = 0;
for (var i = 0; i < 30; i++){
    matriz08A.push(Math.floor(Math.random () * 25 + 1))
}
pares = matriz08A.filter(function(item){
    if (item % 2 == 0){
      return contPar += 1;
    }
});
impares = matriz08A.filter(function(item){
    if (item % 2 != 0){
        return contImpar += 1;
    }
})
console.log('Matriz 08: '+matriz08A);
console.log(pares)
console.log(`São ${contPar} números pares!`)
console.log(impares);
console.log(`São ${contImpar} números impares!`)
/*
elaborar um programa que leia duas matrizes A e B de uma dimensão do tipo vetor com dez elementos inteiras cada. Construir uma matriz C de mesmo tipo e dimensão que seja formada pelo quadrado da soma dos elementos correspondentes nas matrizes A e B. Apresentar os elementos da matriz C.
*/
console.log('Exercício 09');
var matriz09A = [];
var matriz09B = [];
var matriz09C = [];
for (var i = 0; i < 10; i++){
    matriz09A.push(Math.floor(Math.random () * 25 +1))
    matriz09B.push(Math.floor(Math.random () * 25 + 1))
}
for (var i = 0; i < 10; i++){
    matriz09C.push((matriz09A[i]+matriz09B[i]));
}
matriz09C = matriz09C.map(function(item){
    return item *2;
})
console.log(matriz09A);
console.log(matriz09B);
console.log('Soma de (A e B) * 2: '+matriz09C);

/*
Elaborar um programa que leia uma matriz A de uma dimensão do tipo vetor do tipo real. Construir uma matriz B, em que cada posição de indice impar da matriz B deve ser atribuida com um elemento de indice par existente na matriz A 
e cada posição de indice par na matriz B deve ser atribuida com um elemento de indice impar exstente na matriz A. Apresentar os elementos das duas matrizes.
*/
console.log('Exercício 10');
var matriz10A = []
var matriz10B = []
var matriz10C = []
for (var i = 0; i < 5; i++){
    matriz10A.push(Math.floor(Math.random () * 25 + 1));
    matriz10B.push(Math.floor(Math.random () * 25 + 1));
}
for (var i = 0; i < matriz10A.length; i++){
    if (matriz10B[i] % 2 == 1){
        matriz10C.push(matriz10B[i])
    }
    if (matriz10A[i] % 2 == 0){
        matriz10C.push(matriz10A[i])
    }
}
console.log('Matriz A: '+matriz10A);
console.log('Matriz B: '+matriz10B);
console.log('Impares de B + Pares de A: '+matriz10C);
/*
escrever um programa que leia uma matriz A de uma dimensão com 15 elementos inteiros. Apresentar o total de elementos pares existentes na matriz e o total de elementos impares na matriz.
*/
console.log('Exercício 11');
var matriz11A = [];
var somarPares = 0;
var somarImpares = 0;
var totalGeral = 0
for (var i = 0; i < 15; i++){
    matriz11A.push(Math.floor(Math.random() * 25 +1));
}

for (var i = 0; i < matriz11A.length; i++){
    if (matriz11A[i] % 2 == 0){
        somarPares += matriz11A[i]
    }else{
        somarImpares += matriz11A[i]
    }
}
totalGeral = matriz11A.reduce(function(total,item){
    total += item;
    return total;
})
console.log(matriz11A);
console.log('A soma geral é: '+totalGeral)
console.log('A soma dos números pares do vetor é: '+somarPares)
console.log('A soma dos números impares do vetor é: '+somarImpares)

/*
Elaborar um programa que leia uma matriz A de uma dimensão com 10 elementos númericos inteiros. Apresentar o total de elementos impares existentes na matriz e também o percentual do valor total de números impares em relação a quantidade total de elementos armazenados na matriz.
*/
console.log('Exercício 12')
var matriz12A = []
var countImpares = 0
var countPares = 0
var total = 10
var perc;
for (var i = 0; i < 10; i++){
    matriz12A.push(Math.floor(Math.random () * 25 + 1))
}

for (var i = 0; i < matriz12A.length; i++){
    if( matriz12A[i] % 2 == 1){
        countImpares += 1   
    } else{
        countPares += 1
    }
}
perc = (countImpares/total)*100 
console.log(matriz12A);
console.log('Números ímpares: '+countImpares);
console.log('Números pares: '+countPares);
console.log(`O percentual de números impares no vetor é ${perc}%`)
//eu amo minha família
