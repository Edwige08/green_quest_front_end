export default function ProfilesButton(props) {
  return (
    <button type="button" className={'cursor-pointer rounded-sm p-1 hover:text-(--background-color) ' + props.classes} onClick={props.onClick}>
      {props.lucide}
    </button>
  )
}
