import { Link } from "lucide-react";

export default function NavbarButton(props) {
    return (

        <a href={props.link} className="flex flex-col justify-center items-center p-2 gap-1 rounded-lg text-(--text-secondary) hover:bg-(--third-color) hover:text-(--primary-color)" >
            <p>{props.lucide}</p>
            <p>{props.text}</p>
        </a>
    )
}