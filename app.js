let userMove=[];
let gameMove=[];
let level=0;
let gameStarted=false;
let HightScore=0;
let hh=document.querySelector("h2");
let color=["red","green","orange","blue"];
document.addEventListener("keypress",function(){
    if(gameStarted===false){
        gameStarted=true;
        console.log("Game is Started"); 
        levelUp();
    }
})
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },400); 
}
function userFlash(btn){
    btn.classList.add("greenFlash");
    setTimeout(function(){
        btn.classList.remove("greenFlash");
    },400);
}
function checkAns(idx){
    if(userMove[idx]===gameMove[idx]){
        if(userMove.length==gameMove.length){
            setTimeout(levelUp,1000);
        }
    }else{
        hh.innerHTML=`Your Score is <b>${level}</b><br>Press any Key to <b>RESTART</b> the Game`
        if(level>HightScore){
            HightScore=level;
            let displayHight=document.querySelector("#hight");
            displayHight.innerHTML=HightScore;
        }
        let body=document.querySelector("body");
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="rgb(247, 247, 236)";
        },500);
        reset();
    }
}
function levelUp(){
    userMove=[];
    level++;
    hh.innerHTML=`Level ${level}`;
    let ranIndex=Math.floor(Math.random()*4);
    console.log(ranIndex);
    let ranColor=color[ranIndex];
    let renBtn=document.querySelector(`.${ranColor}`);
    gameMove.push(ranColor);
    console.log(gameMove);
    flash(renBtn);
}
function btnSelect(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    userMove.push(userColor);
    console.log(userMove);
    checkAns(userMove.length-1);
}
let button=document.querySelectorAll(".btn");
for(btn of button){
    btn.addEventListener("click",btnSelect);
}
function reset(){
    userMove=[];
    gameMove=[];
    level=0;
    gameStarted=false; 
}