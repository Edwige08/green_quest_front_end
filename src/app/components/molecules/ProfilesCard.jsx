'use client'
import { Ban, Pen, SquareCheck, Trash2,  } from "lucide-react";
import ProfilesButton from "../atoms/ProfilesButton";
import ProfilesText from "../atoms/ProfilesText";
import { useState } from "react";

export default function ProfilesCard ({user}) {
    const [confirmModal,setConfirmModal] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const firstname = user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)
    const lastname = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)

    const handleClick = () => {

    }

    const handleConfirm = async () => {
        const response = await fetch(`http://localhost:5001/volunteers/${user.username}`, {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setDeleted(true)

    }

    const toggleDeleteModal = () => {
        setConfirmModal(!confirmModal)
    }

    return (
        !deleted && (
            <div className="flex flex-row gap-3 justify-between content-end w-full items-center">
                <ProfilesText name={`${firstname} ${lastname}`} city={user.title}/>
                <div className="flex flex-row gap-3 ">
                    <ProfilesButton lucide={<Pen/>} onClick={handleClick} classes="text-(--wastePlastic) hover:bg-(--wastePlastic) bg-(--buttonBlue-background) "></ProfilesButton>
                    <ProfilesButton lucide={<Trash2/>} onClick={toggleDeleteModal} classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) "></ProfilesButton>
                </div>
                {confirmModal && (
                    <div className="flex flex-col p-3 justify-center gap-4  items-center bg-(--background) text-(--foreground) absolute top-0 left-0 w-full h-full rounded-sm">
                        <p>Confirmer la suppression de {firstname} {lastname}</p> 
                        <div className="flex flex-row gap-3 ">
                            <ProfilesButton lucide={<SquareCheck/>} onClick={handleConfirm} classes="text-(--wasteGlass) hover:bg-(--wasteGlass) bg-(--buttonGreen-background) "/>
                            <ProfilesButton lucide={<Ban />} onClick={toggleDeleteModal} classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) " />
                        </div>
                    </div>
                )}
            </div>
        )
    )
}