'use client';

import Button from '../components/atoms/Button';
import { LogIn } from "lucide-react";

import { useRouter } from 'next/navigation';

export default function registrationPage () {
    const router = useRouter();

    return (
        <>
            <p>Vous ne pouvez pas vous inscrire pour le moment. <br /> Veuillez réessayer plus tard :\)</p>
            <Button classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => {router.push('/login')}} lucide={<LogIn />} text="Se connecter"/>
        </>
    )

}