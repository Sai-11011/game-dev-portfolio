let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
let count = 0;
let won = false;
const reset = document.getElementById("reset");
const result = document.getElementById("Result")

reset.addEventListener('click',()=>{
    location.reload();
})

const statusDisplay = document.getElementById("status");
for (let i = 0; i < 9; i++) {
    const btn = document.getElementById(`b${i}`);
    btn.addEventListener("click", () => clickHandler(btn, i));
}

const WinPattren = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

const clickHandler = (btn , i) => { 
    if (board[i] === "" && gameActive) {
        board[i] = currentPlayer;
        count++;
        btn.textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
        winCheck();
    }
}

function winCheck(){
    if(count>4 && won == false && gameActive == true ){
        for(let i = 0;i<8; i++){
            let Xwin = 0;
            let Owin = 0;
            let Pattren = WinPattren[i];
            for(let j=0 ; j<3 ;j++){
                if(board[Pattren[j]] == "X"){
                    Xwin++;
                }else if(board[Pattren[j]] == "O"){
                    Owin++;
                }
            }
            if(Xwin == 3){
                gameActive=false;
                won=true;
                result.innerText += "Player X Won";
                return;
            }else if(Owin == 3){
                gameActive=false;
                won=true;
                result.innerText += "Player O Won";
                return;
            }
        }
    }
    if(count == 9){
        gameActive=false;
        won=true;
        result.innerText += "Tie";
        return;
    }
}
