import {Sprout, PackagePlus, Heart, User} from "lucide-react";
import Navbar from "../components/organisms/Navbar";

export default function Volunteers({children}) {
    let items = [{ lucide: <Sprout />, text: "Dashboard", link: "./dashboard" }, { lucide: <PackagePlus />, text: "Collectes", link: "./collections" }, { lucide: <Heart />, text: "Dons", link: "./donations" }, { lucide: <User />, text: "Profil", link: "./profiles" }]
    return (
        <>
            <Navbar items = {items} />
            {children}
        </>
    );
}