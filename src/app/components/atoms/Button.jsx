export default function Button({classes, type, onClick, lucide, text}) {
  return (
    <button
      className={'flex size-100 h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg duration-300 ease-in-out ' + classes}
      type={type}
      onClick={onClick}
    >
      {lucide} {text}
    </button>
  )
}
