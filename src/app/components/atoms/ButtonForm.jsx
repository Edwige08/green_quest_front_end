export default function ButtonForm({classes, type, lucide, text, disabled = false}) {
  return (
    <button
      className={'flex size-100 h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg duration-300 ease-in-out ' + classes}
      type={type}
      disabled={disabled}
    >
      {lucide} {text}
    </button>
  )
}
