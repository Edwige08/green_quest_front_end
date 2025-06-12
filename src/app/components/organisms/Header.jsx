import {Recycle} from "lucide-react";

export default function Header() {
    return (
        <header className="flex flex-col gap-1 justify-center items-center p-4 bg-(--primary-color) text-(--background)">
            <h1 className="flex flex-row gap-2 font-bold text-xl">
                <Recycle />
                Green Quest</h1>
            <p className="text-(--secondary-color)">Agir pour un environnement plus propre</p>
        </header>
    )
}