import { useMemoryContext } from "../context/memory-context";
import MenuButton from "./MenuButton";

export default function MenuDiv() {

  const {dispatch} = useMemoryContext();

  return (
    <div className='grid mt-6 gap-y-4 '>
        <MenuButton
          backGroundColor="bg-[#FDA214]"
          hover="hover:bg-[#FFB84A]"
          onClick={() => {
            dispatch({type: "OPEN_CLOSE_MODAL"});
            dispatch({type: "RESTART"});
            
          }}
          >Restart</MenuButton>
        <MenuButton
          backGroundColor="bg-[#BCCED9]"
          hover="hover:bg-[#6395B8]" 
          onClick={() => {
            dispatch({type: "OPEN_CLOSE_MODAL"});
            dispatch({type: "NEW_GAME"});
            
          }}
          >New Game</MenuButton>
        <MenuButton
          backGroundColor="bg-[#BCCED9]"
          hover="hover:bg-[#6395B8]" 
          onClick={() => dispatch({type: "OPEN_CLOSE_MODAL"})}
          >Resume Game</MenuButton>
    </div>
  )
}
