import NavbarButton from '../atoms/NavbarButton'

export default function Navbar({items}) {
  return (
    <nav className="flex flex-row justify-center gap-10 border-(--border-color) p-2 text-xs shadow-lg">
      {items.map((item, index) => {
        return <NavbarButton key={index} {...item} />
      })}
    </nav>
  )
}
