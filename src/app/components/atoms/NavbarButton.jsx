export default function NavbarButton(props) {
  return (
    <a
      href={props.link}
      className="flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-(--text-secondary) hover:bg-(--third-color) hover:text-(--primary-color)"
    >
      <p>{props.lucide}</p>
      <p>{props.text}</p>
    </a>
  )
}
