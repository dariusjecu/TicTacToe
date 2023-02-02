import { useState, useEffect } from 'react'
import Game from './Game'

function App() {

  const [player, setPlayer] = useState<"player1" | "player2">("player1")
  const [win, setWin] = useState<string>("")
  const [again, setAgain] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function StartAgain(){
    setPlayer("player1")
    setWin("")
    setAgain(true)
  }

  useEffect(() => {
    setAgain(false)
  }, [win])

  return (
    <div className='container'>
      <h2>{player === "player1" ? "Player 1" : "Player 2"}</h2>
      <Game player={player} setPlayer={setPlayer} win={win} setWin={setWin} again={again} setAgain={setAgain} isFilled={isFilled} setIsFilled={setIsFilled} />
      <h2>{win !== "" ? win : isFilled ? "It's a tie!" : <></>}</h2>
      {win !== "" || isFilled ? <button onClick={StartAgain}>Start Again</button> : <></>}
    </div>
  )
}

export default App
