"use client"

import AssociationsCards from "@/app/components/molecules/AssociationsCards";
import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export default function Donations() {


    const [profileUserName, setProfileUserName] = useState(null)
    const [pointsData, setPointsData] = useState()

    useEffect(() => {
        const storedName = localStorage.getItem("currentUserName");
        setProfileUserName(storedName);
    }, []);

    useEffect(() => {
        async function getVolunteerPoints() {
            const response = await fetch(`http://localhost:5001/volunteers/${profileUserName}`)
            const data = await response.json()
            console.log('❤️', data)
            setPointsData(data.points)
        }

        getVolunteerPoints()
    }, [profileUserName])

    return (
        <main>
            <div className="flex flex-col items-center m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg">
                <p className="text-center font-bold text-lg">Faire un don</p>

                <p className="flex gap-2 text-(--primary-color) "> <Gift /> Points collectées : {pointsData}  </p>
                <div className="shadow-black m-3 ">
                    <AssociationsCards points={pointsData} />
                </div>
            </div>
        </main >
    );
}