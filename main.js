function guessNumber(){
    let playerGuess=prompt("");
    let i=1;
    const nombreAdeviner=Math.ceil(Math.random()*15);
    prompt('Devinez un nombre entre 1 et 15 inclus');

    while(playerGuess != nombreAdeviner && i<16){
        playerGuess=prompt('Echec! Essayez à nouveau de deviner le nombre(entre 1 et 15 inclus)')
        i++;
    }
    if(i>15){
        alert('FAIL')
    }else{
        alert('Félicitations! Le nombre était '+nombreAdeviner+'!');
    }
    

}

guessNumber();