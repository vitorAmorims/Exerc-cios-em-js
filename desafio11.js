// Desafio 11
let numero = [1,2,3,4,5,6,7,8,9,0,3];
function numeroTelefone (phone) {
    let numero = phone;
    let retornarphone;
    let cont = 0
    if (numero.length !== 11) {
        retornarphone = 'Array com tamanho incorreto';
        console.log(retornarphone);
    } else {
        for (let i = 0; i < numero.length; i += 1) {
            if (numero[i] < 0 || numero[i] > 9) {
                retornarphone = 'não é possível gerar um número de telefone com esses valores';
                console.log(retornarphone);
            }
            for (let j = i + 1; j < numero.length; j++) {
                if (numero[i] === numero[j]) {
                    cont += 1;
                }
            }
        }
        if (cont >= 3) {
            retornarphone = 'não é possível gerar um número de telefone com esses valores';
            console.log(retornarphone);
        }
        
        //tratativa para o retorno da função
    retornarphone = numero.join('').toString();
    console.log(`(${retornarphone[0]}${retornarphone[1]}) ${retornarphone[2]}${retornarphone[3]}${retornarphone[4]}${retornarphone[5]}${retornarphone[6]}-${retornarphone[7]}${retornarphone[8]}${retornarphone[9]}${retornarphone[10]}`);                
    }
    return retornarphone;
}
numeroTelefone(numero);



function generatePhoneNumber(param) {
    let phone = param;
    let retornarphone;
    let cont = 0;
    if (phone.length !== 11) {
      retornarphone = 'Array com tamanho incorreto';
    }/* else {
      for (let i = 0; i < phone.length; i += 1) {
        if (phone[i] < 0 || phone[i] > 9) {
          retornarphone = 'não é possível gerar um número de telefone com esses valores';
        } else {
          for (let j = i + 1; j < phone.length; j += 1) {
            if (phone[i] === phone[j]) {
              cont += 1;
            }
          }
        }
      }
      if (cont >= 3) {
        retornarphone = 'não é possível gerar um número de telefone com esses valores';
      } else {
        retornarphone = phone.join('').toString();
        console.log('(' + retornarphone[0] + retornarphone[1] + ')' + ' ' + retornarphone[2] + retornarphone[3] + retornarphone[4] + retornarphone[5] + retornarphone[6] + '-' + retornarphone[7] + retornarphone[8] + retornarphone[9] + retornarphone[10]);
      }
    }*/
    return retornarphone;
  }
  generatePhoneNumber(numero);