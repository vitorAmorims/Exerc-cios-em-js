var fpalavra = window.document.getElementById('textPalindromo')
var tab = window.document.getElementById('flista') // chamando select do formulário
var res = window.document.getElementById('res') // retornar resposta
var vet = [];
var palindromo = [];

function analisar () {
    var palavra = String(fpalavra.value)
        vet.push(palavra);
        palindromo.push(palavra.split('').reverse().join(''));
        let item = document.createElement('option')
        item.text = `${palavra}`
        tab.appendChild(item)
}   


function finalizar (){
    window.alert("Obrigado senhor JESUS, eu agradeço por me capacitar!")
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == palindromo[i]){
            res.innerHTML = `A palavra ${vet[i]} é palindromo.`
        } else {
            res.innerHTML = `Não existem palindromo(s).`
        }
    }
}
//teste para github  ok entendido nas versões windows e linux.
//adicionei comentario no github para verificar atualização no vs code. ok entendido para windows e linux.
//adicionei comentário no linux.
window.alert(`Com Jesus tudo caminha bem!!`)