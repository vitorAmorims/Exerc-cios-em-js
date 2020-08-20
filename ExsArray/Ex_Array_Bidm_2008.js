//pendente media de cada prova bimestral

function MediaCadaBimestral (){
    var total = 0;
    var media = 0;
    var media1 = 0;    
    for (var i = 0; i < nomes.length; i++){
        for (var j = 1; j < 2; j++){
            total += nomes[i][j];
            media = total / nomes.length;
        }
        
    }
    console.log(`A média de primeira prova bimenstral é é ${media}.`);
    console.log(`A média de segunda prova bimenstral é é ${media1}.`);
}
MediaCadaBimestral(nomes); 


/*function MediaBimestral () {
    var total = 0;
    var mediaBi1 = 0;
    var mediaBi2 = 0;
    var mediaBi3 = 0;
    var mediaBi4 = 0;
    
    for (let i = 0; i < nomes.length; i++){
        for (let j = 1; j < 5; j++){
                total +=nomes[i][j];
                //mediaBi1 = total / 8;
                console.log(total);
        }
        console.log(`Media da prova Bimestral: ${mediaBi1}`);
        
    }
}
MediaBimestral(nomes);
*/
