import {Sprout, Trophy} from "lucide-react";
import Navbar from "../components/organisms/Navbar";

export default function Admin({children}) {
    let items = [{ lucide: <Sprout />, text: "Gestion des bénévoles", link: "./volunteers-management" }, { lucide: <Trophy />, text: "Leaderboard", link: "./leaderboard" }]
    return (
        <>
            <Navbar items = {items} />
            <div className="p-2 bg-(--background-color) text-(--foreground) flex flex-col items-center m-auto  w-full">
            {children}
            </div>
        </>
    );
}