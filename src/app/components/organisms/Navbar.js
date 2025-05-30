import NavbarButton from "../atoms/NavbarButton";

export default function Navbar({items}) {
    return (
        <nav className="flex flex-row gap-15 justify-center p-2">
                {items.map((item, index) => {
                    return (
                        <NavbarButton key = {index} {...item} />
                    )
                })}
                
        </nav>
    )
}