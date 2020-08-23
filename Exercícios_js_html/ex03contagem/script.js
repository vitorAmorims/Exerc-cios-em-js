function contagem() {
    let fini = window.document.getElementById('txtinicio')
    let ffina = window.document.getElementById('txtfinal')
    let fpass = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')
    
    if (fini.value == 0 || ffina.value == 0 || fpass.value == 0){
        window.alert('ERRO de preenchimento.')
    } else {
        res.innerHTML = 'contando: '
        let ini = Number(fini.value)
        let fin = Number(ffina.value)
        let passo = Number(fpass.value)
        if ( ini < fin){
            //contagem crescente
            for (let c = ini; c <= fin; c += passo) {
                res.innerHTML +=  `${c} \u{1F930}`
            }
        } else {
            //contagem decrescente
            for (let c = ini; c >= fin; c -= passo){
                res.innerHTML += `${c} \u{1F932}`
            }
        }
        res.innerHTML += `EU CONSIGO EM NOME DE JESUS!!`
    }
}