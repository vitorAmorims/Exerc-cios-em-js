/*
**12 - Condição de existência de um triângulo**
-
Um triângulo é composto de três linhas: `lineA`, `lineB` e `lineC`. Crie uma função chamada `triangleCheck` que deverá receber as três linhas como parâmetro e retornar se é possível formar um triângulo com os valores apresentados de cada linha

Para tanto, tenha em mente algumas considerações:

- Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior que o valor absoluto da diferença entre essas medidas.

- Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.

- O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.
*/

function triangleCheck(linA, linB, linC) {
    let lineA = linA;
    let lineB = linB;
    let lineC = linC;
    let retorno = Boolean;
    if (lineA < lineB + lineC && lineA > (Math.abs(lineB) - Math.abs(lineC))) {
        retorno = true;
        if (lineB < lineA + lineC && lineC > (Math.abs(lineA) - Math.abs(lineC))) {
            retorno = true;
            if (lineC < lineA + lineB && lineC > (Math.abs(lineA) - Math.abs(lineB))) {
                retorno = true;
            }
        }
    } else {
        retorno = false;
    }
    return retorno;
}
console.log(triangleCheck(10, 14, 8));