/*
Desenvolver um programa que simule uma agenda de cadastro pessoal com nome, endereço, codigo postal, bairro e telefone de 5 pessoas. Ao final, o programa deve apresentar seus elementos dispostos em ordem alfabetica ascendente a partir do campo nome.
*/
var agenda = new Array;
var nome = [
    'Vitor',"Rua Araujo Gondim", '04252040', 'sacoma', 999999999
]
var nome1 = [
    'Lucas', "Rua Alencar Araripe", '04050000', 'sacoma', 988888888
]
var nome2 = [
    'Silvia', "Rua Araujo Gondim", '04252040', 'sacoma', 977777777
]
var nome3 = [
    'Neusa', "Rua Silvestro", '03985000', 'Vila União', 966666666
]
var nome4 = [
    'Rubens', "Av. Anhaia Mello", '03000000', 'Jardim Grimaldi', 955555555
]

agenda.push(nome,nome1,nome2,nome3,nome4);
console.table(agenda);

//rotina de ordenação dos elementos a partir do campo nome.
for (var i = 0; i < agenda.length -1; i++){
    for (var j = i + 1; j < agenda.length; j++){
        var x;
        if (agenda[i][0] > agenda[j][0]){
            x=agenda[i][0];             //poderia ter feito laço para incrementar o indice...
            agenda[i][0]=agenda[j][0];
            agenda[j][0]=x;
            
            x=agenda[i][1];
            agenda[i][1]=agenda[j][1];
            agenda[j][1]=x;
            
            x=agenda[i][2];
            agenda[i][2]=agenda[j][1];
            agenda[j][2]=x;

            x=agenda[i][3];
            agenda[i][3]=agenda[j][3];
            agenda[j][3]=x;

            x=agenda[i][4];
            agenda[i][4]=agenda[j][4];
            agenda[j][4]=x;

        }
    }
}
console.table(agenda); //ascendente

//rotina de ordenação dos descendente a partir do campo nome.
//aqui farei loop for na rotina de incremento do indice
for (var i =0; i < agenda.length-1; i++){
    for (var j = i +1; j < agenda.length; j++){
        var x;
        if (agenda[i][0] < agenda[j][0]){
            for(var k=0; k<agenda.length; k++){ //mais estiloso, gostei!!
                x=agenda[i][k];
                agenda[i][k] = agenda[j][k];
                agenda[j][k] = x;
            }
        }
    }
}
console.table(agenda);

/*
Desenvolver um programa que leia os nomes de oito alunos e também suas quatro notas bimestrais. Ao final, deve apresentar o nome de cada aluno classificado em ordem alfabética, bem como suas médias e a média geral dos oito alunos.
*/
var nomes = new Array;
//pendente fazer o exercício.
