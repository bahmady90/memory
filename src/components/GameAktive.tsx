
import { useCardMatching, useMemoryTimer } from "../hooks/useMemory.tsx";
import { useMemoryContext } from "../context/memory-context";
import { useEffect, useMemo, useState } from "react";
import { getMemoryBoard } from "../functions";

import PlayersBar from "./PlayersBar";
import SingelPlayerBar from "./SingelPlayerBar";
import GameBoard from "./GameBoard";
import  MemoryCard  from "./MemoryCard.tsx";





export default function GameAktive() {

    const {gridSize, dispatch, openedMemoryCards, turn, theme, numPlayers, gameState} = useMemoryContext();

    const [firstCardClicked, setFirstCardClicked] = useState(null);
    const [secondCardClicked, setSecondCardClicked] = useState(null);

    const memoryBoard = useMemo(() => 
      getMemoryBoard(gridSize, theme), 
    [gridSize, theme])


   useCardMatching(firstCardClicked, secondCardClicked, 
    memoryBoard, dispatch, turn, setFirstCardClicked, setSecondCardClicked);

    useEffect(() => {
      if(openedMemoryCards.length === (gridSize * 2)){
        dispatch({type: "FINISH_GAME"})
      }
    },[dispatch, gridSize, openedMemoryCards.length])

    useMemoryTimer(dispatch, gameState, numPlayers);
  
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
