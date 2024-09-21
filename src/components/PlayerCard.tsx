import { Player, useMemoryContext } from "../context/memory-context"

type PlayerCardProps = {
    id: number,
    player: Player
}


export default function PlayerCard({id, player} : PlayerCardProps) {

  const {players, turn} = useMemoryContext();

  console.log(player)

  const currentPlayer = players.filter((player) => player.id === id)

  const {score} = currentPlayer[0];

  const isPlayerTurn = turn === id;

  const textColorPlayer = isPlayerTurn ? "text-white" : "text-[#7191A5]"
  const bgColor = isPlayerTurn ? "bg-[#FDA214]" : "bg-[#DFE7EC]"
  const textColorScore = isPlayerTurn ? "text-white" : "text-[#304859]"
  
  if(!isPlayerTurn) {
    return (
      <div className={`${bgColor} sm:flex grid self-center justify-self-center sm:w-[150px] lg:w-[250px] w-[64px] lg:h-[80px] sm:h-[72px] h-[70px] items-center justify-around rounded-lg`}>
        <p className={`${textColorPlayer} sm:text-[18px] text-[15px] font-bold`}><span className="hidden sm:block">Player {id}</span><span className="block sm:hidden">P{id}</span></p>
        <p className={`font-bold ${textColorScore} sm:text-[32px] text-[24px]`}>{score}</p>
      </div>
    )
  }
  return (
    <div className="grid self-center justify-self-center sm:mb-7 mb-5">
    <div className=" mt-2 justify-self-center w-0 h-0 sm:border-l-[20px] border-l-[10px] sm:border-b-[20px] border-b-[10px] sm:border-r-[20px] border-r-[10px] border-l-transparent  border-b-[#FDA214] border-r-transparent"></div>
    <div className={`${bgColor} sm:flex grid self-center justify-self-center sm:w-[150px] lg:w-[250px] w-[64px] lg:h-[80px] sm:h-[72px] h-[70px]  items-center justify-around rounded-lg`}>
      <p className={`${textColorPlayer} sm:text-[18px] text-[15px] font-bold`}><span className="hidden sm:block">Player {id}</span><span className="block sm:hidden">P{id}</span></p>
      <p className={`font-bold ${textColorScore} sm:text-[32px] text-[24px]`}>{score}</p>
    </div>
    <p className="text-[#152938] text-[16px] font-bold uppercase justify-self-center mt-2 hidden sm:box">Current Turn</p>
    </div>
  )
  
}
