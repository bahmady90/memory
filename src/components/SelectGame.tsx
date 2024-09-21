import { useMemoryContext } from "../context/memory-context"
import Button from "./Button";

export default function SelectGame() {

    const {theme, numPlayers, gridSize, dispatch} = useMemoryContext();

    // renderlogic for the responsive selectscreen. Since these buttons dont have all the same css i didnt want to make just one Button COmponent and fill it with too many props
    
  return (

    <div className="bg-[#FCFCFC] lg:w-[654px] sm:w-[654px] w-[327px] lg:h-[559px] sm:h-[559px] h-[386px] rounded-2xl m-0 ">
        <div className="grid grid-rows-4 mt-2">
            <div className="lg:mt-8 sm:mt-6 mt-4 justify-self-center">
                <p className="text-[#7191A5] font-bold sm:mb-4 mb-2 sm:text-[20px] text-[15px]">Select Theme</p>
                <div className="flex lg:gap-12 gap-4 font-bold sm:text-[26px] text-[16px]">
                    <button className={`${theme === "Numbers" ? "bg-[#304859]" : "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-16 sm:px-12 rounded-full sm:w-[256px] w-[134px]`} 
                        onClick={() => dispatch({type: "SET_THEME", payload: "Numbers"})}>Numbers</button>
                    <button className={`${theme === "Icons" ? "bg-[#304859]" : "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-16 sm:px-12 rounded-full sm:w-[256px] w-[134px]`}
                        onClick={() => dispatch({type: "SET_THEME", payload: "Icons"})}>Icons</button>
                </div>
            </div>
            <div className="lg:mt-8 sm:mt-6 mt-4 justify-self-center">
                <p className="text-[#7191A5] font-bold sm:mb-4 mb-2 sm:text-[20px] text-[15px]">Number of Players</p>
                <div className="flex lg:gap-7 sm:gap-4 gap-3 font-bold lg:text-[20px] text-[15px]">
                    <button className={`${numPlayers === 1 ? "bg-[#304859]": "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-8 rounded-full sm:w-[119px] w-[62px]`}
                        onClick={() => dispatch({type: "SET_NUM_PLAYERS", payload: 1})}>1</button>
                    <button className={`${numPlayers === 2 ? "bg-[#304859]": "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-8 rounded-full sm:w-[119px] w-[62px]`}
                        onClick={() => dispatch({type: "SET_NUM_PLAYERS", payload: 2})}>2</button>
                    <button className={`${numPlayers === 3 ? "bg-[#304859]": "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-8 rounded-full sm:w-[119px] w-[62px]`}
                        onClick={() => dispatch({type: "SET_NUM_PLAYERS", payload: 3})}>3</button>
                    <button className={`${numPlayers === 4 ? "bg-[#304859]": "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-8 rounded-full sm:w-[119px] w-[62px]`}
                        onClick={() => dispatch({type: "SET_NUM_PLAYERS", payload: 4})}>4</button>   
                </div>
            </div>
            <div className="lg:mt-8 sm:mt-6 mt-4 justify-self-center">
                <p className="text-[#7191A5] font-bold sm:mb-4 mb-2 sm:text-[20px] text-[15px]">Grid Size</p>
                <div className="flex lg:gap-12 gap-4 font-bold sm:text-[26px] text-[16px]">
                    <button className={` ${gridSize === 4 ? "bg-[#304859]" : "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-16 rounded-full sm:w-[256px] w-[134px]`}
                        onClick={() => dispatch({type: "SET_GRIDSIZE", payload: 4})}>4 x 4</button>
                    <button className={` ${gridSize === 6 ? "bg-[#304859]" : "bg-[#BCCED9] hover:bg-[#6395B8]"} text-white p-2 lg:px-16 rounded-full sm:w-[256px] w-[134px]`}
                        onClick={() => dispatch({type: "SET_GRIDSIZE", payload: 6})}>6 x 6</button>
                </div>
            </div>
            <Button 
                backGroundColor="bg-[#FDA214]" 
                textSize="lg:text-[32px] sm:text-[28px] text-[18px]" 
                paddingX="sm:px-48 px-8"
                hover="hover:bg-[#FFB84A]" 
                textColor="text-white" 
                onClick={() => dispatch({type: "START_GAME"})}>
                    Start Game
            </Button>
      </div>
    </div>
    

    
  )
}
