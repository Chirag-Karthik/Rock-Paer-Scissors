let userScore = 0;
let botScore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDisp = document.querySelector("#user-score");
const botScoreDisp = document.querySelector("#bot-score");

const genBotChoice = () =>{
    const options = ["✊","🤚","✌️"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
};

const drawGame= () =>{
    msg.innerText = "Draw Game 😐";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userChoice,botChoice)=>{
    if(userWin){
        userScore++;
        userScoreDisp.innerText = userScore;
        msg.innerText = `You Win 😊, Your ${userChoice} beats ${botChoice}`;
        msg.style.backgroundColor = "Green";
    }
    else{
        botScore++;
        botScoreDisp.innerText = botScore;
        msg.innerText = `You Lose 😞, Your${userChoice} Loses to ${botChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    const botChoice = genBotChoice();

    if(userChoice === botChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "✊"){
            userWin = botChoice === "🤚"? false : true;
            
        }
        else if(userChoice === "🤚"){
            userWin = botChoice === "✌️"? false : true;
        }
        else{
            userWin = botChoice === "✊"? false : true;
        }
    showWinner(userWin, userChoice,botChoice);

    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


