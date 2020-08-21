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
//aqui farei loop for na rotina de incremento do indice.
for (var i =0; i < agenda.length-1; i++){
    for (var j = i +1; j < agenda.length; j++){
        var x;
        if (agenda[i][0] < agenda[j][0]){
            for(var k=0; k< agenda.length; k++){ //mais estiloso, gostei!!
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
var nome1 = ['Vitor',10,5,7,9];
var nome2 = ['Lucas',3,7,10,10];
var nome3 = ['Silvia', 7, 9, 10,5];
var nome4 = ['Neusa', 5,7,9,10];
var nome5 = ['Rubens', 8,10,7,9];
var nome6 = ['Ayrton', 9,8,10,7];
var nome7 = ['Senna', 9,10,8,7];
var nome8 = ['Tesla', 10,9,8,5];
nomes.push(nome1,nome2,nome3,nome4,nome5,nome6,nome7,nome8);
console.table(nomes);


//rotina de ordenação dos ascendente a partir do campo nome.
//aqui farei loop for na rotina de incremento do indice.
for (var i =0; i < nomes.length-1; i++){
    for (var j = i +1; j < nomes.length; j++){
        var x;
        if (nomes[i][0] > nomes[j][0]){
            for(var k=0; k < 5; k++){ // obs: o número 5 controle o número de colunas.
                x=nomes[i][k];
                nomes[i][k] = nomes[j][k];
                nomes[j][k] = x;
            }
        }
    }
}
console.table(nomes); //aqui está ordenado ascendente pela coluna nome.

/*pendente media de cada aluno
console.log((nomes[0][1]+nomes[0][2]+nomes[0][3]+nomes[0][4])/4);//manual apenas para entendimento
*/
function MediaCadaBimestral (){
    var total = 0;
    var media = 0;
    for (var i = 0; i < nomes.length; i++){
        for (var j = 1; j < 2; j++){
            total += nomes[i][j];
            media = total / nomes.length;
        }
        
    }
    console.log(`A média de primeira prova bimenstral é é ${media}.`);
}
MediaCadaBimestral(nomes); 

//pendente media geral dos alunos


