import { BaseSyntheticEvent, useState, useEffect } from 'react'

interface Props{
    player: "player1" | "player2"
    setPlayer: React.Dispatch<React.SetStateAction<"player1" | "player2">>
    win: string
    setWin: React.Dispatch<React.SetStateAction<string>>
    again: boolean
    setAgain: React.Dispatch<React.SetStateAction<boolean>>
    isFilled: boolean
    setIsFilled: React.Dispatch<React.SetStateAction<boolean>>
}

function Game({player, setPlayer, win, setWin, again, setAgain, isFilled, setIsFilled}: Props) {

    const [game, setGame] = useState<Array<string>>(new Array(9).fill(""))

    function Change(event: BaseSyntheticEvent){
        const index = Number(event.target.attributes[0].value)
        setGame(val => val.map((el: string, i:number): string => {
            if(i === index && el === "")
            {
                if(player === "player1")
                {
                    if((val[i-3] === "X" && val[i+3] === "X") || (val[i-1] === "X" && val[i+1] === "X" && (i === 1 || i === 4 || i === 7)) || (val[i-4] === "X" && val[i+4] === "X") || (val[i-2] === "X" && val[i+2] === "X" && (i === 4)) || (val[i+3] === "X" && val[i+6] === "X") || (val[i-3] === "X" && val[i-6] === "X") || (val[i+1] === "X" && val[i+2] === "X" && (i===0 || i===3 || i===6)) || (val[i-1] === "X" && val[i-2] === "X" && (i===2 || i===5 || i===8)) || (val[i-4] === "X" && val[i-8] === "X") || (val[i-2] === "X" && val[i-4] === "X" && i===6) || (val[i+4] === "X" && val[i+8] === "X") || (val[i+2] === "X" && val[i+4] === "X" && i===2))
                        setWin("Player 1 Won The Game")
                    if(win === "")
                        setPlayer("player2")
                    return "X"
                }
                else
                {
                    if((val[i-3] === "O" && val[i+3] === "O") || (val[i-1] === "O" && val[i+1] === "O" && (i === 1 || i === 4 || i === 7)) || (val[i-4] === "O" && val[i+4] === "O") || (val[i-2] === "O" && val[i+2] === "O" && (i === 4)) || (val[i+3] === "O" && val[i+6] === "O") || (val[i-3] === "O" && val[i-6] === "O") || (val[i+1] === "O" && val[i+2] === "O" && (i===0 || i===3 || i===6)) || (val[i-1] === "O" && val[i-2] === "O" && (i===2 || i===5 || i===8)) || (val[i-4] === "O" && val[i-8] === "O") || (val[i-2] === "O" && val[i-4] === "O" && i===6) || (val[i+4] === "O" && val[i+8] === "O") || (val[i+2] === "O" && val[i+4] === "O" && i===2))
                        setWin("Player 2 Won The Game")
                    if(win === "")
                        setPlayer("player1")
                    return "O"
                }
            }
            return el
        }))
        console.log(game)
    }

    useEffect(() => {
        setGame(new Array(9).fill(""))
    }, [again])

    useEffect(() => {
        let ok = true
        game.map(val => {
            if(val === "")
                ok = false
        })
        setIsFilled(ok)
    }, [game])

    useEffect(() => {
        if(win === "Player 1 Won The Game")
            setPlayer("player1")
        else if(win === "Player 2 Won The Game")
            setPlayer("player2")
    }, [win])

  return (
    <div className={win !== "" || isFilled ? "game end-game" : "game"}>
        {game.map((val,i) => {
            if(i === 1)
                return <h1 id={`${i}`} onClick={Change} className='left-right'>{game[i]}</h1>
            else if(i === 3)
                return <h1 id={`${i}`} onClick={Change} className='up-down'>{game[i]}</h1>
            else if(i === 4)
                return <h1 id={`${i}`} onClick={Change} className='all'>{game[i]}</h1>
            else if(i === 5)
                return <h1 id={`${i}`} onClick={Change} className='up-down'>{game[i]}</h1>
            else if(i === 7)
                return <h1 id={`${i}`} onClick={Change} className='left-right'>{game[i]}</h1>
            else
            return <h1 id={`${i}`} onClick={Change}>{game[i]}</h1>
        })}
    </div>
  )
}

export default Game
