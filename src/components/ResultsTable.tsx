import { useMemoryContext } from "../context/memory-context"
import ResultRow from "./ResultRow";

type ResultTableProps = {
  playersWithHighestScore: Array<number>
}

export default function ResultsTable({playersWithHighestScore}: ResultTableProps) {

    const {players} = useMemoryContext();
    console.log(players)
    
  return (
    <div className="grid justify-self-center sm:w-[542px] w-[279px] gap-y-1">
      {players.map((player) =>
        <ResultRow
          playersWithHighestScore={playersWithHighestScore}
          key={player.id}
          id={player.id}
          score={player.score}
        />
        )}
    </div>
  )
}
