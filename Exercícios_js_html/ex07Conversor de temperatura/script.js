var far = window.document.getElementById('fnum')
var tab = window.document.getElementById('flista') // chamando select do formulário
var res = window.document.getElementById('res') // retornar resposta
var fah = []
var fcelcius = []
var fkelvin = []

function incluir() {
    fah.push(Number(far.value))
    let item = document.createElement('option')
    item.text = `${far.value}°F`
    tab.appendChild(item)
}   

function celsius() {
    for (let i = 0; i < fah.length; i++){
        fcelcius.push(parseInt((fah[i] - 32)*(5/9)))
        fkelvin.push(parseInt((fah[i] - 32)*(5/9))+273)
        
    }
    res.innerHTML = (`temperaturas em celcius ${fcelcius} °C`)    
}

function kelvin(){
    window.alert(`temperaturas em kelvin ${fkelvin} K`)
}
