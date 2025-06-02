"use client"

import { useState } from "react";
import InputCity from "../atoms/InputCity";

export default function VolunteerForm () {
    const [villeData, setVilleData] = useState(null);
    const handleVilleSelect = (data) => {
        console.log('Ville sélectionnée :', data);
        setVilleData(data); // { nom, code, lat, lng }
    };

    return (
        <>
            <InputCity onSelect={handleVilleSelect}></InputCity>
        </>
    )
    
}