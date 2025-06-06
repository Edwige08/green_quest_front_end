"use client"
import Button from "@/app/components/atoms/Button";
import ButtonForm from "@/app/components/atoms/ButtonForm";
import VolunteerForm from "@/app/components/organisms/VolunteerForm";
import { LogOut, Save } from "lucide-react";
import { useRouter } from "next/navigation";


export default function Profiles() {
    const router = useRouter();

     const handleClick = () => {
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserName');
        router.push('/login')
    }
    return (
        <>
            <VolunteerForm title={"Mon profil"}>
                <ButtonForm type="submit" lucide={<Save />} text={"Mise à jour"} classes={"bg-(--primary-color) text-(--background) mb-2"} />
                <Button type="button" onClick={handleClick} lucide={<LogOut />} classes="bg-(--text-secondary)" text={"Déconnexion"}></Button>
            </VolunteerForm>
        </>
    );
}