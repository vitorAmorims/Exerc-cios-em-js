function Idesafio () {
    var numero = (Number(window.prompt(`Digite um número inteiro.`)))
    var sucessor;
    var antecessor;
    sucessor = (Number(numero) + 1)
    antecessor = (Number(numero) -1)
    window.alert(`Antes de ${numero}, temos o número ${antecessor}.`)
    window.alert(`Depois de ${numero}, temos o número ${sucessor}`)
    
}
