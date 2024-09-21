
import { useMemoryContext } from '../context/memory-context';

type HeaderMenuButtonProps = {
  children: string
}

export default function HeaderMenuButton({children} : HeaderMenuButtonProps) {

    const {dispatch} = useMemoryContext();


  function handleClickMenuButton(){
    dispatch({type: "OPEN_CLOSE_MODAL"})
  }

  return (
    <button className={`text-white text-[16px] bg-[#FDA214] hover:bg-[#FFB84A] font-bold py-2 px-4 rounded-full w-[78px] h-[40px] justify-self-center self-center sm:hidden`}
        onClick={handleClickMenuButton}>
      {children}
    </button>
  )
}
