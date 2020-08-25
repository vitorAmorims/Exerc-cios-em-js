/*
Criar matriz m x n, e seus respectivos valores. Apresentar a média por linha e soma total de os elementos.
*/
function criarMatriz2D (linhas, colunas, randon){
    matriz = new Array;
    for (let i = 0; i < linhas; i++){
        matriz.push([]);
        matriz[i].push(new Array(colunas));
        for (let j = 0; j < colunas; j++){
            matriz[i][j] = (Math.floor(Math.random() * 10 + 1));
        }
    }
    return matriz;
}
console.table(criarMatriz2D(5,5));

//console.log(matriz[0][0]+matriz[0][1]); lógica para somar as linhas, antes de calcular média por linha.
var soma = 0;
var media = 0
for (let i = 0; i < 1; i++){
    for (let j = 0; j < 5; j++){
        soma += (matriz[i][j]);
        media = soma / matriz.length;
    }
}
console.log(soma); //cosegui criar soma para os itens da primeira linha.
console.log(media); //consegui fazer a media para primeira linha.