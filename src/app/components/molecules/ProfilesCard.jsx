'use client'
import { Pen, Trash2 } from "lucide-react";
import ProfilesButton from "../atoms/ProfilesButton";
import ProfilesText from "../atoms/ProfilesText";

export default function ProfilesCard ({user}) {
    const handleClick = () => {

    }
    return(
        <div className="flex flex-row gap-3 justify-between content-end w-full items-center">
            <ProfilesText name={`${user.firstname} ${user.lastname}`} city={user.title}/>
            <div className="flex flex-row gap-3 ">
            <ProfilesButton lucide={<Pen/>} onClick={handleClick} classes="text-(--wastePlastic)"></ProfilesButton>
            <ProfilesButton lucide={<Trash2/>} onClick={handleClick} classes="text-(--wasteOthers)"></ProfilesButton>
            </div>
        </div>
    )
}