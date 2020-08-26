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

function MediaPorLinha(matriz){
    var soma = 0;
    var media = 0;
    var media1 = 0;
    for (var i = 0; i < 1; i++){
        for (var j = 0; j < 5; j++){
            soma += matriz[i][j];
            media = soma / 5;
        }
    return media;
    }
}
console.log(MediaPorLinha(matriz));

for (var i = 1; i < 2; i++){
    var soma = 0;
    var media = 0;
    for (var j = 0; j < 5; j++){
        soma += matriz[i][j];
        media = soma / 5;
    }
console.log(media);
}
