'use client'
import AssociationsCards from "@/app/components/molecules/AssociationsCards";
import { Gift } from "lucide-react";
import { useEffect, useState } from "react";

export default function Donations() {

    const [pointsData, setPointsData] = useState()

    useEffect(() => {
        async function getVolunteerPoints() {
        const response = await fetch('http://localhost:5001/volunteers')
        const data = await response.json()
        console.log('❤️', data)
        setPointsData(data)
    }
    getVolunteerPoints()
    }, [])

    const collectedPoints = pointsData?.data?.points ?? '...';

    return (
        <main>
            <div className="flex flex-col items-center m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg">
                <p className="text-center font-bold text-lg">Faire un don</p>

                <p className="flex gap-2 text-(--primary-color) "> <Gift /> Points collectées : {collectedPoints}  </p>

                <div className="shadow-black m-3 ">
                    <AssociationsCards />
                </div>
            </div>
        </main >
    );
}