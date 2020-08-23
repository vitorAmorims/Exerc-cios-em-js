var fnum = window.document.getElementById('fatorial')
var res = window.document.getElementById('res') // retornar resposta

function calcular () {
    var n = Number(fnum.value)
    var fatorial  = 1;
    while (n > 0) {
        fatorial *= n;
        n -= 1;
    }
    res.innerHTML += (` O fatorial de ${Number(fnum.value)}!  é igual à ${fatorial}`)
}   
