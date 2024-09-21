import { useEffect } from "react";
import { ResultArray } from "../functions";
import { useMemoryContext } from "../context/memory-context";

  export function useCardMatching(
      firstCardClicked: number | null,
      secondCardClicked: number | null,
      memoryBoard: ResultArray,
      setFirstCardClicked: React.Dispatch<React.SetStateAction<number | null>>,
      setSecondCardClicked: React.Dispatch<React.SetStateAction<number | null>> ) {

      const {dispatch, turn, theme} = useMemoryContext()

      const timeout = theme === "Icons" ? 350 : 200;

    useEffect(() => {
        // getting the svg-s of both cards when clicked (svg can be the src or the number)
        if(firstCardClicked && secondCardClicked) {
          const svgOfFirstCardClicked = memoryBoard.reduce((acc, cur) => {
            if(firstCardClicked === cur.id){
              acc = cur.src;
            }
            return acc;
          }, "")
  
          const svgOfSecondCardClicked = memoryBoard.reduce((acc, cur) => {
            if(secondCardClicked === cur.id){
              acc = cur.src;
            }
            return acc;
          }, "")
          
          // when both cards are from same type (memory)
          if(svgOfFirstCardClicked === svgOfSecondCardClicked){
            dispatch({type: "SET_SCORE_PLAYER", payload: turn})
            dispatch({type:"SET_RING_ON/OFF"});
            setTimeout(() => {
              dispatch({type: "SET_RING_ON/OFF"});
              dispatch({type: "PUSH_TO_OPENED_CARDS", payload: svgOfSecondCardClicked});
              setFirstCardClicked(null);
              setSecondCardClicked(null);
            }, 200)
            
          }
          else {
            setTimeout(() => {
              setFirstCardClicked(null);
              setSecondCardClicked(null);
              dispatch({type: "NEXT_TURN"})
            }, timeout); 
          }
          
          
        }
      }, [firstCardClicked, secondCardClicked, dispatch, memoryBoard, turn, setFirstCardClicked, setSecondCardClicked, timeout])

}

export function useMemoryTimer(){

  const {dispatch, gameState, numPlayers} = useMemoryContext();

  // increase the time when 1 player
  useEffect(() => {
    let intervalId : number;
    if(gameState === "active" && numPlayers === 1){
       intervalId = setInterval(() => {
        dispatch({type: "INCREASE_TIME"})
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [dispatch, gameState, numPlayers])
}
