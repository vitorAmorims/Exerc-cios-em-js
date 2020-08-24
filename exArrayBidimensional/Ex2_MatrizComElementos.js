/*
Criar matriz m x n, e seus respectivos valores.
*/
function criarMatriz2D (linhas, colunas){
    var matriz = new Array;
    for (let i = 0; i < linhas; i++){
        matriz.push([]);
        matriz[i].push(new Array(colunas));
        for (let j = 0; j < colunas; j++){
            matriz[i][j] = (Math.floor(Math.random() * 25 + 1));
        }
    }
    return matriz;
}
console.table(criarMatriz2D(4,4));