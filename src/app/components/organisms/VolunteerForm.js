"use client"

import { useState } from "react";
import InputCity from "../atoms/InputCity";
import InputLabel from "../atoms/InputLabel";
import ButtonForm from "../atoms/ButtonForm";
import { LogOut, Save } from "lucide-react";
import Button from "../atoms/Button";

export default function VolunteerForm() {
    const [villeData, setVilleData] = useState(null);
    const [dataForm, setDataForm] = useState({});
    const [errorMessage, setErrorMessage] = useState("")
    const handleVilleSelect = (data) => {
        console.log('Ville sélectionnée :', data);
        setVilleData(data);
    };
    const handleChange = (value, name) => {

        setDataForm(prev => ({
            ...prev,
            [name]: value
        }));


    }

    const handleClick = () => {

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const final = {
            ...dataForm,
            ...(villeData && { city: { ...villeData } })
        }
        const userId = localStorage.getItem('currentUserId');

        const response = await fetch(`http://localhost:5001/volunteers/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(final)
        });
        const result = await response.text();
        if (response.status == 401) {
            setErrorMessage(result)
        } else {
            setErrorMessage("")
        }
        setDataForm({})
        setVilleData(null)
        console.log(dataForm)

    }


    return (
        <div className="flex flex-col items-center  ">
            <h2>Mon profil</h2>
            <form className=" flex flex-col rounded-sm w-9/10 p-3 gap-3" onSubmit={handleSubmit}>
                <InputLabel name="Prénom" type="text" dataName="firstname" placeholder="votre prénom" value={dataForm.firstname || ""} onChange={handleChange} />
                <InputLabel name="Nom" type="text" dataName="lastname" placeholder="Votre nom" value={dataForm.lastname || ""} onChange={handleChange} />
                <InputLabel name="pseudo" type="text" dataName="username" placeholder="votre pseudo" value={dataForm.username || ""} onChange={handleChange} />
                <InputLabel name="Email" type="text" dataName="email" placeholder="Votre email" value={dataForm.email || ""} onChange={handleChange} />
                <InputLabel name="Mot de passe" type="password" dataName="password" placeholder="Votre mot de passe" value={dataForm.password || ""} onChange={handleChange} />
                <InputCity onSelect={handleVilleSelect}></InputCity>
                {errorMessage && (
                    <div className="text-red-800 text-sm font-medium mt-2">
                        {errorMessage}
                    </div>
                )}
                <ButtonForm type="submit" lucide={<Save />} text={"Mise à jour"} classes={"bg-(--primary-color) text-(--background) mb-2"} />
                <Button type="button" onClick={handleClick} lucide={<LogOut />} classes="bg-(--text-secondary)" text={"Déconnexion"}></Button>
            </form>
        </div>
    )

}