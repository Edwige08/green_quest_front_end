export default function ProfilesButton (props) {
    return (
        <button type="button" className={'cursor-pointer rounded-sm hover:text-(--background-color) p-1 ' + props.classes} onClick={props.onClick}>{props.lucide}</button>
    )
}