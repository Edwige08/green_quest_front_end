export default function Button ({ classes, type, onClick, lucide, text }) {
    return <button className={"size-100 rounded-sm duration-300 ease-in-out cursor-pointer h-14 w-full flex justify-center items-center gap-2 " + classes} type={type} onClick={onClick}>{lucide} {text}</button>
}