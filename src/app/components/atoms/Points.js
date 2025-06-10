import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export default function Points() {

    const profileUserName = localStorage.getItem("currentUserName");   
       
        const [pointsData, setPointsData] = useState()
    
        async function getVolunteerPoints() {
            const response = await fetch(`http://localhost:5001/volunteers/${profileUserName}`)
            const data = await response.json()
            console.log('❤️', data)
            setPointsData(data.points)
        }
        useEffect(() => {
            
        getVolunteerPoints()
        }, [])
    

    return (
        <>
            <p className="flex gap-2 text-(--primary-color) "> <Gift /> Points collectées : {pointsData}  </p>

        </>
    )
}