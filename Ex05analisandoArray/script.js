var fnum = window.document.getElementById('txtnum') // chamando numero do formulário
var tab = window.document.getElementById('flista') // chamando select do formulário
var res = window.document.getElementById('res') // retornar resposta
var vet = [];
var crescente = [];
var decrescente = [];


function adicionar () {
    var num = Number(fnum.value)
    if (num > 0 && num < 101 && vet.indexOf(num)){
        vet.push(num);
        let item = document.createElement('option')
        item.text = `Valor ${num} na matriz.`
        tab.appendChild(item)
    } else {window.alert('Número fora do valor solicitado ou já inserido no vetor.')}
}

function finalizar () {
    window.alert("Eu CONSIGO EM NOME DE JESUS!")
    let soma = 0;
    let media = 0;
    for (let i = 0; i < vet.length; i++){
         soma += vet[i]
         media = soma / vet.length
         crescente.push(vet[i])
         crescente.sort()
         decrescente.push(crescente[i])
         decrescente.reverse()
         
    }
    res.innerHTML = `A soma total do vetor é ${soma}. A média do vetor é ${media}.`
    res.innerHTML += `\nEste vetor possui ${vet.length} elementos!`
    window.alert(`O Vetor inserido é [${vet}]`)
    window.alert(`${vet.sort()}`)
    window.alert(`O menor valor do vetor é [${crescente[0]}]`)
    window.alert(`O maior valor do vetor é [${decrescente[0]}]`)
} 

