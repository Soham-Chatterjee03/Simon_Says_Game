let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","blue"];

let started=false;
let level=0;
let highestscore=0;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");


document.addEventListener("keypress",function(){
    if (started==false){
        started=true;
        console.log("Game started");

        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250);
}
function redFlash(){
    let body=document.querySelector("body");
    body.classList.add("redflash");
    setTimeout(function () {
        body.classList.remove("redflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;



    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);

}
function checkAns(idx){
    // console.log("curr level: ",level);

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=(`Game Over: Your Score is <b>${level}</b><br>Press Any key to continue`);
        redFlash();
        reset();
        
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    // console.log(this);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    if(level>highestscore){
        highestscore=level;
        h3.innerText=(`Highest Score ${highestscore}`);
    }
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}