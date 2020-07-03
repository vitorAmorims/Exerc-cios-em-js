function calcular() {
    let numero = window.document.getElementById('txttabuada')
    let tab = window.document.getElementById('seltab')
    let n = Number(numero.value)
    if (n == 0){
        window.alert('Resultado inválido')
        
    } else {
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }   
}