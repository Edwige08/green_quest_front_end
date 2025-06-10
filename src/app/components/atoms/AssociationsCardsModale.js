import { useState } from "react";
import Button from "./Button";

export default function AssociationsCardsModale({ onClose, associationName,points }) {
    const [donationMade, setDonationMade] = useState(false);
    const [donation, setDonation] = useState(0);

    const handleChange = (e) => {
        setDonation(e.target.value)
        console.log(donation)
    }

    const handleDonation = () => {
        setDonationMade(true)
    }
    return (
        <>
            <div className=" flex justify-center items-center w-full ">

                {!donationMade && (
                    <div className="bg-white p-3 rounded shadow-lg w-full flex flex-col items-center gap-3">
                        <div>

                            <input type="number" step={100} placeholder="100 ?" list="defaultNumbers" min={0} max={points} className="border w-20 p-1 rounded-md" onChange={handleChange}></input>
                            points
                        </div>

                        <div className="flex flex-row gap-3 text-(--background) w-full ">
                            <Button onClick={handleDonation}
                                text={"Donner"}
                                classes={
                                    "bg-(--primary-color)  hover:bg-(--primary-color-hover) mb-2 w-full"
                                }
                            />
                            <Button
                                type="button"
                                onClick={onClose}
                                classes="bg-(--text-secondary)  hover:bg-(--text-secondary-hover) "
                                text={"Annuler"}
                            ></Button>
                        </div>
                    </div>
                )}
                {donationMade && (

                    <p onClick={onClose} className="flex content-center items-center gap-3 m-auto cursor-pointer bg-emerald-600 text-white font-bold py-2 px-7 rounded w-fit " >
                        Merci pour le don de {donation} points à {associationName}
                    </p>
                )}

            </div>

        </>
    )
}