import { useMemoryContext } from "../context/memory-context";
import { getPlayersWithHighestScore } from "../functions";
import Button from "./Button";
import ResultSingelPlayer from "./ResultSingelPlayer";
import ResultsTable from "./ResultsTable";


export default function Resultdiv() {

    const {players, dispatch, numPlayers} = useMemoryContext();

    const {playersWithHighestScore} = getPlayersWithHighestScore(players);

  // renderlogic for the numberofPlayers, the player/s who have won and show the result responsive
  return (
    <div className="grid h-full">
      {numPlayers === 1 ? 
        <ResultSingelPlayer/>
        : 
      <>
      <div className="justify-self-center sm:mt-8 mt-4 flex justify-center items-center flex-col">
            <h1 
                className="font-bold sm:text-[48px] text-[24px] text-[#152938] sm:mt-6">{playersWithHighestScore.length === 1 ? `Player ${playersWithHighestScore[0]} Wins!`: 
                    "It`s a Tie!" }</h1>
            <p className={`text-bold text-[#7191A5] sm:text-[20px] text-[14px] mt-2`}>Game over! Here are the results...</p>
        </div>
        <ResultsTable playersWithHighestScore={playersWithHighestScore}/>
        <div className="flex justify-center items-center gap-4">
          <Button 
            backGroundColor="bg-[#FDA214]" 
            textSize="sm:text-[20px] text-[18px]" 
            paddingX="px-8" 
            hover="hover:bg-[#FFB84A]" 
            textColor="text-white"
            onClick={() => dispatch({type: "RESTART"})}
            >Restart</Button>
          <Button 
            backGroundColor="bg-[#BCCED9]" 
            textSize="sm:text-[20px] text-[18px]" 
            paddingX="px-4" 
            hover="hover:bg-[#6395B8]" 
            textColor="text-[#304859]"
            onClick={() => dispatch({type: "NEW_GAME"})}
          >New Game</Button>  
        </div>
        </>
      }
        
    </div>
  )
}
