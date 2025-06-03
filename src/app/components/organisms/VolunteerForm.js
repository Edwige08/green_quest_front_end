"use client"

import { useState } from "react";
import InputCity from "../atoms/InputCity";
import InputLabel from "../atoms/InputLabel";
import ButtonForm from "../atoms/ButtonForm";
import { LogOut, Save } from "lucide-react";
import Button from "../atoms/Button";

export default function VolunteerForm() {
    const [villeData, setVilleData] = useState(null);
    const [dataForm, setDataForm] = useState({
        // firstname: "",
        // lastname: "",
        // username: "",
        // email: "",
        // password: ""
    })
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const final = {
            ...dataForm,
           ...(villeData && { city: { ...villeData } })
        }
        console.log(final)
    }


    return (
        <div className="flex flex-col items-center ">
            <h2>Mon profil</h2>
            <form className=" rounded-sm w-9/10 p-3 g-2" onSubmit={handleSubmit}>
                <InputLabel name="Prénom" type="text" dataName="firstname" placeholder="votre prénom" onChange={handleChange} />
                <InputLabel name="Nom" type="text" dataName="lastname" placeholder="Votre nom" onChange={handleChange} />
                <InputLabel name="pseudo" type="text" dataName="username" placeholder="votre pseudo" onChange={handleChange} />
                <InputLabel name="Email" type="text" dataName="email" placeholder="Votre email" onChange={handleChange} />
                <InputLabel name="Mot de passe" type="password" dataName="password" placeholder="Votre mot de passe" onChange={handleChange} />
                <InputCity onSelect={handleVilleSelect}></InputCity>
                <ButtonForm type="submit" lucide={<Save />} text={"Mise à jour"} classes={"bg-(--primary-color) text-(--background) mb-2"} />
                <Button type="button" onClick={handleClick} lucide={<LogOut/>} classes="bg-(--text-secondary)" text={"Déconnexion"}></Button>
            </form>
        </div>
    )

}