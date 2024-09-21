import { useMemoryContext } from "../context/memory-context"
import { convertSeconds } from "../functions";

export default function SingelPlayerBar() {

    const {moves, time} = useMemoryContext();

    
      
      const result = convertSeconds(time)

  return (
    <div className="flex justify-around gap-x-8">
      <div className={`bg-[#DFE7EC] sm:flex grid self-center justify-self-center w-[151px] sm:w-[255px] h-[70px] sm:h-[72px] items-center justify-around rounded-lg`}>
        <p className={`text-[#7191A5] sm:text-[18px] text-[15px] font-bold self-center justify-self-center`}>Time</p>
        <p className={`font-bold text-[#304859] sm:text-[32px] text-[24px] self-center justify-self-center`}>{result}</p>
      </div>
      <div className={`bg-[#DFE7EC] sm:flex grid self-center justify-self-center w-[151px] sm:w-[255px] h-[70px] sm:h-[72px] items-center justify-around rounded-lg`}>
        <p className={`text-[#7191A5] sm:text-[18px] text-[15px] font-bold self-center justify-self-center`}>Moves</p>
        <p className={`font-bold text-[#304859] sm:text-[32px] text-[24px] self-center justify-self-center`}>{moves}</p>
      </div>
    </div>
  )
}
