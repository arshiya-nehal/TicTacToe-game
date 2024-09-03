let box=document.querySelectorAll(".box");
// console.log(box);
let resetBtn=document.querySelector("#reset");
// console.log(resetBtn);
let newGame=document.querySelector(".newBtn");
let msgCon=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;//playerX,playerO
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
const resetGame=()=>
    {
        turn0=true;
        enableBoxes();
        msgCon.classList.add("hide");
    };

box.forEach((box)=>{
box.addEventListener("click",()=>
{    

    if(turn0)
    {
box.innerText="O";

turn0=false;
box.style.color="red";
    }
  
    else{
        
        box.innerText="X";
       
turn0=true;
    }
    
    box.disabled=true;
    checkWinner();
});
});
const disabledBoxes=()=>
{
    for(let boxes of box){
    boxes.disabled=true;
}};
const enableBoxes=()=>
{
    for(let boxes of box){
    boxes.disabled=false;
    boxes.innerText="";
}};
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgCon.classList.remove("hide");
    disabledBoxes();
}

const checkWinner=()=>
{
for(let pattern of winPatterns)
{

    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log([box[pattern[0]].innerText,box[pattern[1]].innerText,box[pattern[2]].innerText]);
     let pos1Val=box[pattern[0]].innerText;
     let pos2Val=box[pattern[1]].innerText;
     let pos3Val=box[pattern[2]].innerText;
   
     if(pos1Val!="" && pos2Val!="" && pos3Val!="")
     {
         if(pos1Val===pos2Val && pos2Val===pos3Val)
         {
            
             showWinner(pos1Val);
         }
        
     }
}

};
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

