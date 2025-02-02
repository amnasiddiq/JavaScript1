let userScore=0;
let player2Score=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");


const showWinner = (userWin, choiceId, p2choice) => {
    const userScorepara = document.querySelector("#user-score");
    const player2Scorepara = document.querySelector("#player2-score");
  
    if (userWin) {
      userScore++;
      userScorepara.innerText = `${userScore}`;
      msg.innerText = `You Win! ${choiceId} beats the ${p2choice}`;
      msg.style.backgroundColor = "green";
    } else {
      player2Score++;
      player2Scorepara.innerText = `${player2Score}`;
      msg.innerText = `You lose! ${p2choice} beats the ${choiceId}`;
      msg.style.backgroundColor = "Red";
    }
  };

 const drawgame=()=>{
    msg.innerText="Game is Draw! PLay again.";
    msg.style.backgroundColor="black";
 }

const genp2choice=()=>{
    const options=["rock","paper","scissors"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx]; 
}

const playGame=(choiceId)=>{
    console.log("user choice is:",choiceId);
    const p2choice=genp2choice();
    console.log("player2 choice is:",p2choice);
    if(choiceId===p2choice){
        drawgame();
    }else{
        let userWin=true;
        if(choiceId==="rock"){
         userWin =p2choice==="paper"?false:true;
        }else if(choiceId==="paper"){
            userWin=p2choice==="scissors"?false:true;
        }else{
            userWin=p2choice==="rock"?false:true;
        }
        showWinner(userWin, choiceId, p2choice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const choiceId=choice.getAttribute("id");    
    playGame(choiceId);
    })
})