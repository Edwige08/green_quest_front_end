'use client'
import { Ban, Pen, SquareCheck, Trash2, } from "lucide-react";
import ProfilesButton from "../atoms/ProfilesButton";
import ProfilesText from "../atoms/ProfilesText";
import { useState } from "react";
import VolunteerForm from "../organisms/VolunteerForm";
import Button from "../atoms/Button";
import ButtonForm from "../atoms/ButtonForm";

export default function ProfilesCard({ user }) {
    const [confirmModal, setConfirmModal] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [updateModal, setUpdateModal] = useState(false)

    const firstname = user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)
    const lastname = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)

    const toggleUpdateModal = () => {
        setUpdateModal(!updateModal)
    }

    const handleConfirm = async () => {
        const response = await fetch(`http://localhost:5001/volunteers/${user.username}`, {
            method: 'DELETE',
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
            <div className="flex flex-row gap-3 justify-between content-end  items-center border-1 border-(--border-color) m-2 p-2 w-[26rem] rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out">
                <ProfilesText name={`${firstname} ${lastname}`} city={user.title} />
                <div className="flex flex-row gap-3 ">
                    <ProfilesButton lucide={<Pen />} onClick={toggleUpdateModal} classes="text-(--wastePlastic) hover:bg-(--wastePlastic) bg-(--buttonBlue-background) "></ProfilesButton>
                    <ProfilesButton lucide={<Trash2 />} onClick={toggleDeleteModal} classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) "></ProfilesButton>
                </div>
                {confirmModal && (
                    <div className="flex flex-col p-3 justify-center gap-4  items-center bg-(--background) text-(--foreground) absolute top-0 left-0 w-full h-full rounded-sm">
                        <p>Confirmer la suppression de {firstname} {lastname}</p>
                        <div className="flex flex-row gap-3 ">
                            <ProfilesButton lucide={<SquareCheck />} onClick={handleConfirm} classes="text-(--wasteGlass) hover:bg-(--wasteGlass) bg-(--buttonGreen-background) " />
                            <ProfilesButton lucide={<Ban />} onClick={toggleDeleteModal} classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) " />
                        </div>
                    </div>
                )}
                {updateModal && ( 
                    <VolunteerForm title="Modifier le bénévole" user={user} classes={"absolute bg-(--background) text-(--foreground) top-0 left-1/20 w-9/10  rounded-sm z-100"}>
                        <div className="flex flex-row gap-3">
                        <ButtonForm type="submit"  text={"Modifier"} classes={"bg-(--primary-color) text-(--background) mb-2"} />
                        <Button type="button" onClick={toggleUpdateModal}  classes="bg-(--text-secondary)" text={"Annuler"}></Button>
                        </div>
                    </VolunteerForm>
                )}
            </div>
        )
    )
}