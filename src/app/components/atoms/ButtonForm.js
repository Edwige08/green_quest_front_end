export default function ButtonForm ({ classes, type, lucide, text, disabled = false }) {
    return <button className={"size-100 rounded-sm duration-300 ease-in-out cursor-pointer h-14 w-full flex justify-center items-center gap-2 " + classes} type={type} disabled={disabled}>{lucide} {text}</button>
}