import { useEffect } from "react";
import { ResultArray } from "../functions";
import { useMemoryContext } from "../context/memory-context";

  export function useCardMatching(
  firstCardClicked: number | null,
  secondCardClicked: number | null,
  memoryBoard: ResultArray,
  setFirstCardClicked: React.Dispatch<React.SetStateAction<number | null>>,
  setSecondCardClicked: React.Dispatch<React.SetStateAction<number | null>> 
  )
  {

      const {dispatch, turn} = useMemoryContext()

    useEffect(() => {
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
  
          if(svgOfFirstCardClicked === svgOfSecondCardClicked){
            dispatch({type: "SET_SCORE_PLAYER", payload: turn})
            dispatch({type: "PUSH_TO_OPENED_CARDS", payload: svgOfSecondCardClicked});
            setFirstCardClicked(null);
            setSecondCardClicked(null);
          }
          else {
            setTimeout(() => {
              setFirstCardClicked(null);
              setSecondCardClicked(null);
              dispatch({type: "NEXT_TURN"})
            }, 200); 
          }
          
          
        }
      }, [firstCardClicked, secondCardClicked, dispatch, memoryBoard, turn, setFirstCardClicked, setSecondCardClicked])
}

export function useMemoryTimer(){

  const {dispatch, gameState, numPlayers} = useMemoryContext();

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
