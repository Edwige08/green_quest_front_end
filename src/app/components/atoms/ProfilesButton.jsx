export default function ProfilesButton (props) {
    return (
        <button type="button" className={'' + props.classes} onClick={props.onClick}>{props.lucide}</button>
    )
}