import { useMemoryContext } from "../context/memory-context"
import Button from "./Button";
import HeaderMenuButton from "./HeaderMenuButton";

export default function Header() {

  const {gameState, dispatch} = useMemoryContext();

  return (
    <>
    {/* header-component that responsively renders different elements and a different layout depending on the gameState and the screenwidth*/}
    {gameState === "active" ? (
      
        <header className="grid w-4/5 grid-cols-[1fr,auto] mx-[20%] sm:mt-12 mt-4 sm:gap-x-8">
          <h1 className=" text-[#152938] font-atkinson font-bold sm:text-5xl text-[28px] justify-self-start self-center sm:mt-4">Memory</h1>
          <div className="hidden sm:flex space-x-4 justify-self-end self-center w-full">
            <Button 
              backGroundColor="bg-[#FDA214]" 
              textSize="text-[20px]" 
              paddingX="px-8" 
              hover="hover:bg-[#FFB84A]"
              textColor="text-white"
              onClick={() => dispatch({type: "RESTART"})}
              >Restart</Button>
            <Button 
              backGroundColor="bg-[#BCCED9]" 
              textSize="text-[20px]" 
              paddingX="px-4" 
              hover="hover:bg-[#6395B8]" 
              textColor="text-[#304859]"
              onClick={() => dispatch({type: "NEW_GAME"})}
              >New Game</Button>
          </div>
          <HeaderMenuButton>Menu</HeaderMenuButton>
          
        </header>
      )
        : (<h1 className="text-white font-atkinson font-bold sm:text-5xl text-3xl justify-self-center mt-4 sm:mt-12">Memory</h1>)

    }
    </>
  )
}
