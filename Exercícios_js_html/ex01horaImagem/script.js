function carregar () {
    var msg = window.document.getElementById ('msg');
    var img = window.document.getElementById ('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Hoje é dia ${data}, são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = 'yellow';
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'silver';
    } else {
        img.src = 'noite.jpg' 
        document.body.style.background = 'black';
    }
}