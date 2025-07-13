let cells=document.querySelectorAll(".cell");
let resetBtn=document.querySelector(".reset");
let turnO=true;
let currentStatus=document.querySelector("h5");
let newGameButton=document.querySelector(".new");
let count=0;

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

const resetGame=()=>{
    turnO=true;
    currentStatus.innerText="Player O's turn";
    count=1;
    enableBtns();
};
resetBtn.addEventListener("click",resetGame);
newGameButton.addEventListener("click",resetGame);

cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        if(turnO===true){
            cell.innerText="O";
            turnO=false;
            currentStatus.innerText="Player X's turn";
        }
        else{
            cell.innerText="X";
            turnO=true;
            currentStatus.innerText="Player O's turn";
        }
        cell.disabled=true;
        count=count+1;
        checkWinner();
        checkDraw(count);
        
    });
});

const disableBtns=()=>{
    cells.forEach((cell)=>{
        cell.disabled=true;
    });
};
const enableBtns=()=>{
    cells.forEach((cell)=>{
        cell.disabled=false;
        cell.innerText="";
    });
};
const checkDraw=(count)=>{
    if(count===9){
        currentStatus.innerText="It's a DRAW";
    }
}

const showWinner=(winner)=>{
    
    currentStatus.innerText=`Player ${winner} is the WINNER`;
    disableBtns();
    
    
    
};

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=cells[pattern[0]].innerText;
        let pos2Val=cells[pattern[1]].innerText;
        let pos3Val=cells[pattern[2]].innerText;
        if(pos1Val!="" && pos2Val!="" &&  pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val && pos3Val===pos1Val){
                showWinner(pos1Val);
            }
        }

    }
}

