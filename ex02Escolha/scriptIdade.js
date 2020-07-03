function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value == 0 || fano.value > ano ) {
        window.alert('ATENÇÂO: O ano de prenchimento é inválido!!')
    }else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //res.innerHTML = `Idade Calculada ${idade}`;
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = '';
        if (fsex[0].checked){
            genero = 'Masculino'
            if (idade > 0 && idade < 2){
                img.setAttribute('src','rnhomem.png')
            }else if (idade >= 2 && idade < 12){
                //adolescente
            } else if (idade >= 12 && idade < 20){
                img.setAttribute('src','adolesHomem.jpg')
            }else if (idade >= 20 && idade < 50) {
                img.setAttribute('src','homemMaduro.jpg')
            }else if (idade >= 50 && idade <= 80){
                //idoso
            }else {
                //matuzalem
            }
        } else {
            genero = 'Feminino'
            if (idade > 0 && idade < 2){
                img.setAttribute('src','rnMulher.png')
            } else if (idade >=2 && idade < 12){
                //adolescente
            } else if (idade >= 12 && idade < 20){
                img.setAttribute('src','adolesMulher.jpg')
            }else if (idade >=20 && idade < 50) {
                img.setAttribute('src','mulhermadura.png')
            }else if (idade >= 50 && idade <= 80){
                //idoso
            }else {
                //matuzalem
            }
        }
       res.innerHTML = `Detectamos gênero ${genero} com idade ${idade}.`
       res.appendChild(img)
    }
}