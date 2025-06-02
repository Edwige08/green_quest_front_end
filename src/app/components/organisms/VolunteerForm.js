"use client"

import { useState } from "react";
import InputCity from "../atoms/InputCity";
import InputLabel from "../atoms/InputLabel";

export default function VolunteerForm() {
    const [villeData, setVilleData] = useState(null);
    const [dataForm, setDataForm] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: ""
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

    return (
        <>
            <form onSubmit={handleSubmit}>
                <InputLabel name="Prénom" dataName="firstname" placeholder="votre prénom" onChange={handleChange} />
                <InputLabel name="Nom" dataName="lastname" placeholder="Votre nom" onChange={handleChange} />
                <InputLabel name="pseudo" dataName="username" placeholder="votre pseudo" onChange={handleChange} />
                <InputLabel name="Email" dataName="email" placeholder="Votre email" onChange={handleChange} />
                <InputLabel name="Mot de passe" dataName="password" placeholder="Votre mot de passe" onChange={handleChange} />
                <InputCity onSelect={handleVilleSelect}></InputCity>
            </form>
        </>
    )

}