var Reset_all = ['dep_1','dep_2','dep_3"','dep_4','dep_5','dep_6','dep_7','dep_8','dep_9','dep_10','cou_1','cou_2','cou_3',
    'occ_1','other','rec_1','rec_2', 'rec_3','rec_4','epar'];

var Depences = document.getElementsByClassName('depence');

var Recettes = document.getElementsByClassName('recet');

var Epargne = document.getElementById('epar');

var Total = document.getElementById('resultat');

var depence_Calc ;

var Result = 0 ;

var Result_2 = 0 ;

var Result_3 = 0 ;

var recette_Calc ;

var epargne_Calc ;

var total_Calc ;


document.getElementById('btn_reset').addEventListener('click' , function E() {

    for ( var i=0 ; i<Depences.length ; i++ )
    {
      depence_Calc =  parseInt(Depences[i].value);
      Result += depence_Calc ;

    }

    for (var a=0 ; a<Epargne.length ; a++)
    {
        epargne_Calc = parseInt(Epargne[a].value);
        Result_2 +=epargne_Calc;

    }

    for (var b = 0 ; b<Recettes.length ; b++)
    {
        recette_Calc = parseInt(Recettes[b].value);
        Result_3 += recette_Calc;

    }

    total_Calc = parseInt(Result_3 + Result_2 - Result);
    Total.innerHTML = 'votre budjet : '+total_Calc +'€';

    console.log(total_Calc);

    alert('voici votre budjet : '+total_Calc+' €');

}) ;

document.getElementById('btn').addEventListener('click' , function () {


    Reset_all = 0;
    Total.innerHTML = 0;
});

//var Reset = document.getElementById('btn_reset').addEventListener('click' , function () {


//});



