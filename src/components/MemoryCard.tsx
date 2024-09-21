import { Dispatch, SetStateAction } from "react"
import { useMemoryContext } from "../context/memory-context";

type MemoryCardProps = {
  firstCardClicked: null | number,
  secondCardClicked: null | number,
  id: number,
  src: string,
  setFirstCardClicked: Dispatch<SetStateAction<number | null>>,
  setSecondCardClicked: Dispatch<SetStateAction<number | null>>
}



export default function MemoryCard ({firstCardClicked, 
  secondCardClicked, setFirstCardClicked, setSecondCardClicked, id, src} : MemoryCardProps)  {

  const {gridSize, openedMemoryCards, theme, dispatch, ringAktive} = useMemoryContext();


  function handleClick()  {
    //logic to differentiate between the first and second click
    dispatch({type: "INCEARSE_MOVES"})
    if (!firstCardClicked) {
      setFirstCardClicked(id);
    } else {
      setSecondCardClicked(id);
    }
  };

  // conditionally rendering the cardSize depending on the gridSize and the screenwidth
  const cardSize = gridSize === 4 ? "sm:w-[118px] w-[72.53px] h-[72.53px] sm:h-[118px]" : "sm:w-[82px] w-[46px] sm:h-[82px] h-[46px]"

  // boolean to acces all cards that are clicked
  const isFlipped = firstCardClicked === id || secondCardClicked === id;

  // boolean to make sure the card is not opened already
  const cardIsOpened = openedMemoryCards.reduce((acc, curr) => {
    if(curr === src){
      acc = true
    }
    return acc
    }, false)
  
  // conditionally applied a ring style when ringaktive is true
  const ringAktiveStyle = ringAktive ? "bg-[#FDA214] ring-4 ring-orange-500" : "bg-[#FDA214]"
  
  // renderlogic for the cards how are already opened
  if(cardIsOpened) return (
    <button
        onClick={handleClick}
        disabled={true}
        className={`rounded-[100%] bg-[#BCCED9] ${cardSize} flex items-center justify-center`}
      >
        {theme === "Numbers" ? <p className="lg:text-[44px] text-[24px] font-bold text-[#FCFCFC]">{src}</p> : <img src={src} alt="Memory Card" />}
      </button>
  )
  // renderlogic to differentiate between cards that are clicked and not
  else {
    return (
      <button
        onClick={handleClick}
        disabled={isFlipped} 
        className={`rounded-[100%] transition-transform transform duration-500 ${isFlipped ? `${ringAktiveStyle}` : "bg-[#304859]"} ${cardSize} flex items-center justify-center`}
      >
        {isFlipped && (
          theme === "Numbers" ? (
            <p className="lg:text-[44px] text-[24px] font-bold text-[#FCFCFC]">{src}</p> )
             : (
            <img src={src} alt="Memory Card"/>
              )
        )}
      </button>
    );
  }
  
  
}

