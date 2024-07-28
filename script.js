// To select all the boxes
let boxes=document.querySelectorAll(".box")
// To select the reset button
let resetbtn=document.querySelector(".reset")
let newbtn=document.querySelector(".new")
let msgcontainer=document.querySelector(".msg-container")
let Msg=document.querySelector(".msg")
let turnO=true; //player O turn
const winturn= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//********************* */ logic*******************************
  boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("The")
        if(turnO){
            box.innerText="O"
            turnO=false
        }
        else{
            box.innerText="X"
            turnO=true
        }
        box.disabled=true;
        checkWinner()
    });
});
const resetGame=()=>{
    turnO=true;
    enable()
    msgcontainer.classList.add("hide")
}
  const disabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
  }
  const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
  }
 const showwinner=(winner)=>{
    Msg.innerText=`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disabled();
 }

 const checkWinner=()=>{
    for(let pattern of winturn){
    let pos1= boxes[pattern[0]].innerText
    let pos2= boxes[pattern[1]].innerText
    let pos3= boxes[pattern[2]].innerText
   if(pos1!=0 && pos2!=0 && pos3!=0){
    if(pos1==pos2 && pos2==pos3){
        console.log("Winner is: ",pos1)
        showwinner(pos1)
    }
   }
    }
 }
 newbtn.addEventListener("click",resetGame)
 resetbtn.addEventListener("click",resetGame)