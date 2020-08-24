/*
Criar uma função que crie uma matriz m x n com estrutura de repetição.
*/
function criarMatriz2D (linhas, colunas){
    var matriz = new Array;
    for (let i = 0; i < linhas; i++){
        matriz.push([]);
        matriz[i].push = (new Array(colunas));
    }
    return matriz;
}
console.table(criarMatriz2D(3,3));