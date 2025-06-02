'use client'
import AssociationsCardsButton from "../atoms/AssociationCardsButton"
import { useEffect, useState } from "react"

export default function AssociationsCardsText() {
    const [associationsData, setAssociationsData] = useState([])

    async function getAssociations() {
        const response = await fetch('http://localhost:5001/associations')
        const data = await response.json()
        console.log('💾', data)
        setAssociationsData(data)

    }

    useEffect(() => {
        getAssociations()
    }, [])

    useEffect(() => {
        console.log('data:', associationsData)
    }, [associationsData])

    return (
        <>
        
            <div className="flex flex-col content-center leading-9 gap-3 w-100" >
                {associationsData && associationsData.map((association) => (
                    <div key={association.id} className="border-2 p-2 border-(--border-color) rounded-lg">
                        <h3 className="flex font-bold justify-center" >
                            {association.image} {association.title}
                        </h3>
                        <p className="flex justify-center line-1 leading-5">
                            {association.description}
                        </p>
                        <hr className="m-4 border-(--border-color) border-1" ></hr>
                        <AssociationsCardsButton/>
                    </div>
                ))}
            </div>
        </>
    )
}