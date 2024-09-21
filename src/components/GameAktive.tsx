
import { useCardMatching, useMemoryTimer } from "../hooks/useMemory.tsx"
import { useMemoryContext } from "../context/memory-context";
import { useEffect, useMemo, useState } from "react";
import { getMemoryBoard } from "../functions";

import PlayersBar from "./PlayersBar";
import SingelPlayerBar from "./SingelPlayerBar";
import GameBoard from "./GameBoard";
import  MemoryCard  from "./MemoryCard.tsx";


export default function GameAktive() {

    const {gridSize, dispatch, openedMemoryCards, theme, numPlayers} = useMemoryContext();

    
    // state to handle the clicks
    const [firstCardClicked, setFirstCardClicked] = useState<number | null>(null);;
    const [secondCardClicked, setSecondCardClicked] = useState<number | null>(null);


    // Function to get the MemoryBoard depending on the gridsize and theme. It needs to be wrapped in a useMemo. Otherwise the MemoryCards change everytime a card gets clicked.
    const memoryBoard = useMemo(() => 
      getMemoryBoard(gridSize, theme), 
    [gridSize, theme])

    // hook that handles the game-logic
   useCardMatching(firstCardClicked, secondCardClicked, 
    memoryBoard, setFirstCardClicked, setSecondCardClicked);


    // hook that changes the gameState to finished
    useEffect(() => {
      if(openedMemoryCards.length === ((gridSize * gridSize) / 2)){
        dispatch({type: "FINISH_GAME"})
      }
    },[dispatch, gridSize, openedMemoryCards.length])

    //hook that enables the timer
    useMemoryTimer();

  return (
    <>
        <GameBoard>
            {memoryBoard.map((el, index) => 
              <MemoryCard 
                key={index} 
                firstCardClicked={firstCardClicked} 
                setFirstCardClicked={setFirstCardClicked}
                secondCardClicked={secondCardClicked}
                setSecondCardClicked={setSecondCardClicked}
                id={index + 1} 
                src={el.src}
                />
            )}
        </GameBoard>
        {numPlayers === 1 ? <SingelPlayerBar/> : <PlayersBar/>}
            
        
    </>
    
  )
}
