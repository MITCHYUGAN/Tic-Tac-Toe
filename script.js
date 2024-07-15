const boxes = document.querySelectorAll(".box")
const Xscore = document.querySelector(".Xscore")
const OScore = document.querySelector(".Oscore")
const resetCurrentGame = document.querySelector(".resetCurrentGame")
const resetWholeGame = document.querySelector(".resetWholeGame")

// Logic to Create two Player, Defined as a Factory Function
function createPlayer(player1, player2){
    const getPlayer1 = () => player1 
    const getPlayer2 = () => player2 

    return {getPlayer1, getPlayer2}
}

function createGame(player1, player2){
    const { getPlayer1, getPlayer2 } = createPlayer(player1, player2)
    let gameWinner = false

    let player1Score = 0
    let player2Score = 0

    const getPlayer1Score = () => player1Score
    const getPlayer2Score = () => player2Score
    const increasePlayer1Score = () => player1Score++
    const increasePlayer2Score = () => player2Score++
    const resetPlayer1Score = () => player1Score = 0
    const resetPlayer2Score = () => player2Score = 0

    const getGameWinner = () => gameWinner
    const setGameWinner = (set) => gameWinner = set
    const increaseGameIndex = () => gameIndex++

    return {
        getPlayer1, getPlayer2, getGameWinner, setGameWinner,
        increaseGameIndex, increasePlayer1Score, increasePlayer2Score,
        getPlayer1Score, getPlayer2Score, resetPlayer1Score, resetPlayer2Score
    }
}

const game = createGame("X", "O")
let currentPlayer = "O"
Xscore.textContent = game.getPlayer1Score()
OScore.textContent = game.getPlayer2Score()

function playGame(){
    currentPlayer = currentPlayer === game.getPlayer1() ? game.getPlayer2() : game.getPlayer1()
    console.log(currentPlayer);
}

function chooseWinner(firstBox, SecondBox, ThirdBox,XScore,Oscore){
    boxes[firstBox].classList.add("won")
    boxes[SecondBox].classList.add("won")
    boxes[ThirdBox].classList.add("won")
    game.setGameWinner(true)

    // currentPlayer = "O"

    setTimeout(function(){
        boxes[firstBox].classList.remove("won")
        boxes[SecondBox].classList.remove("won")
        boxes[ThirdBox].classList.remove("won")
        game.setGameWinner(false)

        XScore.textContent = game.getPlayer1Score()
        Oscore.textContent = game.getPlayer2Score()
        
        for(let i = 0; i < boxes.length; i++){
            boxes[i].textContent = ""
        }

    }, 2000);
}

// Logic to reset a current game, Incase a mistake was made
resetCurrentGame.addEventListener("click", () => {
    currentPlayer = "O"
    for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = ""
    }
})

// Logic to Reset the Progress of the whole game, Namely another Player onboard
resetWholeGame.addEventListener("click", () => {
    currentPlayer = "O"
    for(let i = 0; i < boxes.length; i++){
        boxes[i].textContent = ""
    }

    game.resetPlayer1Score()
    game.resetPlayer2Score()
    Xscore.textContent = game.getPlayer1Score()
    OScore.textContent = game.getPlayer2Score()
})

boxes.forEach(box => {
    
    box.addEventListener("click", (e) => {

        if (e.target.textContent === "" && game.getGameWinner() == false) {
            currentPlayer = currentPlayer === game.getPlayer1() ? game.getPlayer2() : game.getPlayer1()
            e.target.textContent = currentPlayer

            // Logic to Find Player 1(X) Winner 
            if(boxes[0].textContent === "X" && boxes[1].textContent === "X" && boxes[2].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(0,1,2,Xscore,OScore)
            } else if (boxes[3].textContent === "X" && boxes[4].textContent === "X" && boxes[5].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(3,4,5,Xscore,OScore)
            } else if (boxes[6].textContent === "X" && boxes[7].textContent === "X" && boxes[8].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(6,7,8,Xscore,OScore)
            } else if (boxes[0].textContent === "X" && boxes[3].textContent === "X" && boxes[6].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(0,3,6,Xscore,OScore)
            } else if (boxes[1].textContent === "X" && boxes[4].textContent === "X" && boxes[7].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(1,4,7,Xscore,OScore)
            } else if (boxes[2].textContent === "X" && boxes[5].textContent === "X" && boxes[8].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(2,5,8,Xscore,OScore)
            } else if (boxes[0].textContent === "X" && boxes[4].textContent === "X" && boxes[8].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(0,4,8,Xscore,OScore)
            } else if (boxes[2].textContent === "X" && boxes[4].textContent === "X" && boxes[6].textContent === "X"){
                game.increasePlayer1Score()
                chooseWinner(2,4,6,Xscore,OScore)
            }

            // Logic to Find Player 2(O) Winner 
            else if(boxes[0].textContent === "O" && boxes[1].textContent === "O" && boxes[2].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(0,1,2,Xscore,OScore)
            } else if (boxes[3].textContent === "O" && boxes[4].textContent === "O" && boxes[5].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(3,4,5,Xscore,OScore)
            } else if (boxes[6].textContent === "O" && boxes[7].textContent === "O" && boxes[8].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(6,7,8,Xscore,OScore)
            } else if (boxes[0].textContent === "O" && boxes[3].textContent === "O" && boxes[6].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(0,3,6,Xscore,OScore)
            } else if (boxes[1].textContent === "O" && boxes[4].textContent === "O" && boxes[7].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(1,4,7,Xscore,OScore)
            } else if (boxes[2].textContent === "O" && boxes[5].textContent === "O" && boxes[8].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(2,5,8,Xscore,OScore)
            } else if (boxes[0].textContent === "O" && boxes[4].textContent === "O" && boxes[8].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(0,4,8,Xscore,OScore)
            } else if (boxes[2].textContent === "O" && boxes[4].textContent === "O" && boxes[6].textContent === "O"){
                game.increasePlayer2Score()
                chooseWinner(2,4,6,Xscore,OScore)
            }
        }

        setTimeout(function() {
            if(boxes[0].textContent !== "" && boxes[1].textContent !== "" && boxes[2].textContent !== "" && boxes[3].textContent !== "" && boxes[4].textContent !== "" && boxes[5].textContent !== "" && boxes[6].textContent !== "" && boxes[7].textContent !== "" && boxes[8].textContent !== ""){
                boxes[0].textContent = ""
                boxes[1].textContent = ""
                boxes[2].textContent = ""
                boxes[3].textContent = ""
                boxes[4].textContent = ""
                boxes[5].textContent = ""
                boxes[6].textContent = ""
                boxes[7].textContent = ""
                boxes[8].textContent = ""
                // currentPlayer = "O"
            }
        }, 2000)
    })
})