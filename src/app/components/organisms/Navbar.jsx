import NavbarButton from "../atoms/NavbarButton";

export default function Navbar({items}) {
    return (
        <nav className="flex flex-row gap-10 justify-center p-2 text-xs border-(--border-color) shadow-lg">
                {items.map((item, index) => {
                    return (
                        <NavbarButton key = {index} {...item} />
                    )
                })}
                
        </nav>
    )
}