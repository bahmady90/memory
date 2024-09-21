
type MenuBottonProps = {
    children: string,
    onClick: () => void,
    backGroundColor: string,
    hover: string
}


export default function MenuButton({children, backGroundColor, hover, onClick} : MenuBottonProps) {

    
  return (
    <button className={`text-white text-[16px] ${backGroundColor} ${hover} font-bold py-2 px-4 rounded-full w-[278px] h-[48px] justify-self-center self-center`}
        onClick={onClick}>
      {children}
    </button>
  )
}
