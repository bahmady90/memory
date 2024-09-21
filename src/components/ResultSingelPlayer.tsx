import { useMemoryContext } from "../context/memory-context";
import { convertSeconds } from "../functions";
import Button from "./Button";

export default function ResultSingelPlayer() {

    const {dispatch, time, moves} = useMemoryContext();

    const formatedTime = convertSeconds(time);

  return (
    <>
        <div className="justify-self-center mt-8 flex justify-center items-center flex-col">
          <h1 className="font-bold sm:text-[48px] text-[24px] text-[#152938]  mt-6">You did it!</h1>
          <p className={`text-bold text-[#7191A5] sm:text-[20px] text-[14px] mt-2`}>Game over! Here`s how you got on...</p>
        </div> 
        <div className="grid justify-self-center sm:w-[542px] w-[279px] gap-y-1">
          <div className={`bg-[#DFE7EC] flex justify-around  h-[72px] rounded-lg items-center`}>
            <p className=" text-[#7191A5] font-bold mr-6" >Times Elapsed</p>
            <p className=" text-[#304859] font-bold sm:text-[32px] text-[20px] ">{formatedTime}</p>
          </div>
          <div className={`bg-[#DFE7EC] flex justify-around  h-[72px] rounded-lg items-center`}>
            <p className=" text-[#7191A5] font-bold" >Moves Taken</p>
            <p className=" text-[#304859] font-bold sm:text-[32px] text-[20px]">{moves} Moves</p>
          </div>
        </div>
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
  )
}
