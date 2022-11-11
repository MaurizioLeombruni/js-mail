const array_Emails = ["matteo@gmail.com" , "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
let numPlayer = 0;
let numCPU = 0;
const infoBox = document.getElementById('userInfo');
let emailToCheck;

//Controlla se l'email indicata è presente nella lista. Scrive il risultato nella infoBox indicata.
//Se l'email non c'è, la aggiunge.

function checkEmail(){

    emailToCheck = document.getElementById('inputEmail').value;

    if(emailToCheck === null || emailToCheck === ""){
        infoBox.innerHTML = "Did you forget to write your email?"
        return false
    }

    for(i=0; i<array_Emails.length; i++){

        if(emailToCheck === array_Emails[i]){
            
            infoBox.innerHTML = "Your email is already registered."

            return true;
        }
    }

    infoBox.innerHTML = "Your email has not been found and has been added to the list.";
    array_Emails.push(emailToCheck);
    return false;
}

//Costruisce una lista HTML con tutti gli elementi dell'array di email.

function showEmails(){

    infoBox.innerHTML = "<ul>";

    for(i=0; i<array_Emails.length; i++){
        infoBox.innerHTML += "<li>" + array_Emails[i] + "</li>";
    }

    infoBox.innerHTML += "</ul>";
}

//Randomizza un valore per il giocatore e uno per il computer. Li confronta e vince il più grande.

function diceGame(){
    numPlayer=Math.floor(Math.random() * 6);
    numCPU=Math.floor(Math.random() * 6);

    numPlayer = parseInt(numPlayer);
    numCPU = parseInt(numCPU);

    console.log("Player has drawn " + numPlayer);
    console.log("CPU has drawn " + numCPU);

    if(numPlayer > numCPU){
        infoBox.innerHTML = "You won! Your winning dice number was " + numPlayer;
    } else if (numPlayer === numCPU){
        infoBox.innerHTML = "You got the same number! It was " + numPlayer;
    } else {
        infoBox.innerHTML = "You lost. The winning dice number was " + numCPU + ", while you got " + numPlayer;
    }

    return true;
}