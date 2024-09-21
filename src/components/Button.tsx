
type ButtonProps = {
    children: string,
    backGroundColor: string,
    textColor: string,
    textSize: string,
    paddingX: string,
    hover: string
    onClick: () => void
}
export default function Button({children, backGroundColor, textSize, paddingX, hover, textColor, onClick} : ButtonProps) {
  return (
    <button className={`${textColor} ${textSize} ${backGroundColor} lg:mt-8 sm:mt-10 mt-4 self-center justify-self-center font-bold ${paddingX} py-4 rounded-full ${hover}`}
        onClick={onClick}>
      {children}
    </button>
  )
}
 