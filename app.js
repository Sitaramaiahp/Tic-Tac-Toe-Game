let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerO,playerX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

//function(4)
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText ="";
    }
};
//function (5)
const resetGame = () => {
    turnO = true;
    enableBoxes(); //callBack function (4)
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame); //callBack function (5)
resetBtn.addEventListener("click", resetGame); //callBack function (5)

//function (3)
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

//function (2)
const showWinner = (winner) => {
    console.log("winner",winner);
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
    disableBoxes(); //callBack function (3)
};

//function (1)
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val); //callBack function (2)
            }
        }
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turnO) {
            //playerO
            box.innerText = "O";
            turnO = false;
        } else {
            //playerX 
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner(); //callBack function (1)
    });
});
