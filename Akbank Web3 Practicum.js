
function oddishOrEvenish(number){;

    let checker=0;
    let snum = String(number);

    for(n=0; n< snum.length; n++ ){ //Sayıyı 0 dan başlayarak arttır
        checker += parseInt(snum[n],10)
    }

    if(checker % 2 == 0) { //Bölümden kalan 0 ise çift sayıdır.
        alert("Even");
    }
    else { //Bölümden kalan 0 değil ise tek sayıdır.
        alert("Odd");
    }
}
oddishOrEvenish(15) //Fonksiyonu çağır.