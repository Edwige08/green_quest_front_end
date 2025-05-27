import {Sprout, PackagePlus, Heart, User} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex flex-row gap-15 justify-center p-2">
            <div className="flex flex-row gap-2">
                <Sprout />
                <p>Dashboard</p>
            </div>
            <div className="flex flex-row gap-2">
                <PackagePlus />
                <p>Collectes</p>
            </div>
            <div className="flex flex-row gap-2">
                <Heart />
                <p>Dons</p>
            </div>
            <div className="flex flex-row gap-2">
                <User />
                <p>Profil</p>
            </div>
        </nav>
    )
}