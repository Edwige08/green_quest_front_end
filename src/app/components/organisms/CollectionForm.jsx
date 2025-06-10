'use client';

import InputCity from "@/app/components/atoms/InputCity";
import InputWaste from "@/app/components/atoms/InputWaste";
import ButtonForm from "@/app/components/atoms/ButtonForm";
import CollectionList from "../molecules/collectionsList";
import Collection from "../atoms/collection";
import { Save } from "lucide-react";

import { useState, useEffect } from 'react';


export default function CollectionForm() {

    const [wastes, setWastes] = useState([]);
    const [disabledButton, setDisabledButton] = useState(true);
    const [city, setCity] = useState("");

    const [datas, setDatas] = useState({ volunteerId: "", quantitiesArray: [], city });

    const [savedDatasCollect, setSavedDatasCollect] = useState([]);

    const displayCollect = () => {


    }

    useEffect(() => {
        async function fetchWastes() {
            const response = await fetch("http://localhost:5001/wastes");
            const wastes = await response.json();
            setWastes(wastes);
        }

        fetchWastes();
    }, []);


    useEffect(() => {
        datas.city = city;
        datas.volunteerId = localStorage?.getItem("currentUserId");
        if (city && datas.quantitiesArray.length > 0) {
            setDisabledButton(false);
        }
    }, [city])




    const addCollect = async (e) => {
        e.preventDefault();
        // console.log(e);
        // console.log(datas);
        const response = await fetch("http://localhost:5001/collections", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datas)
        })
        const data = { "status": response.status, rep: await response.json() };
        // console.log(data.rep);

        setSavedDatasCollect(prev => [...prev,data.rep[0]])
        console.log("yo", savedDatasCollect)

        // localStorage.setItem("savedDatasCollect", JSON.stringify(savedDatasCollect));

        displayCollect(savedDatasCollect);
    }

    const handleChange = (value, id, points) => {
        const isExistIndex = datas.quantitiesArray.findIndex(item => item.wasteId === id);
        if (isExistIndex < 0) {
            datas.quantitiesArray.push({
                "wasteId": id,
                "wastePoints": points,
                "quantity": value
            })
        } else if (value === 0) {
            datas.quantitiesArray.splice(isExistIndex, 1);
        } else {
            datas.quantitiesArray[isExistIndex] = {
                "wasteId": id,
                "wastePoints": points,
                "quantity": value
            }
        }
        if (city && datas.quantitiesArray.length > 0) {
            setDisabledButton(false);
        }
    }

    const handleSelect = (e) => {
        setCity(e);
    }

    return (
        <>
            <form onSubmit={addCollect} className="w-full m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg p-5">

                <InputCity onSelect={handleSelect} />

                <h2>Type de déchet *</h2>
                {wastes.map((waste) => {
                    return <InputWaste onChange={handleChange} key={waste.id} wasteTitle={waste.label} wasteId={waste.id} wastePoints={waste.points_value} />
                })
                }

                <ButtonForm
                    type="submit"
                    classes="text-white bg-(--primary-color) hover:bg-(--primary-color-hover) disabled:opacity-50 disabled:cursor-default"
                    lucide={<Save />}
                    text="Enregistrer"
                    disabled={disabledButton}
                />



            </form>
            <CollectionList data={savedDatasCollect}/>

        </>
    )
}