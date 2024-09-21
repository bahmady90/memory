
type ResultRowProps = {
  id: number,
  score: number,
  playersWithHighestScore: Array<number>
}

export default function ResultRow({id, score, playersWithHighestScore}: ResultRowProps) {

  let playerHasWon = false;
  playersWithHighestScore.forEach((playerId) => {
    if(id === playerId){
      playerHasWon = true
    }
  })


  return (
    <div className={`${playerHasWon ? "bg-[#152938]" : "bg-[#DFE7EC]"} flex justify-around  sm:h-[72px] h-[48px] rounded-lg items-center`}>
        <p className={`${playerHasWon ? "text-[#FCFCFC]" : "text-[#7191A5]"} font-bold`}>Player {id} {playerHasWon ? "(Winner!)" : "" }</p>
        <p className={`${playerHasWon ? "text-[#FCFCFC]" : "text-[#7191A5]"} font-bold sm:text-[32px] text-[20px] ${playerHasWon && "mr-10"}`}>{score} {score === 1 ? "Pair": "Pairs"}</p>
    </div>
  )
}
