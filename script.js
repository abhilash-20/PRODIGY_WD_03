console.log("Welcome to the Game!");
let turn = "X";
let gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let filledBoxes = Array.from(boxtext).filter(box => box.innerText !== '');
    if (filledBoxes.length === 9) {
        document.querySelector('.info').innerText = "It's a draw!";
        gameOver = true;
        return;
    }
    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!";
            gameOver = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    });
};


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

reset.addEventListener('click',(e)=>
{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>
        {
            element.innerText="";
        })
        turn="X"
        gameOver=false;
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
})