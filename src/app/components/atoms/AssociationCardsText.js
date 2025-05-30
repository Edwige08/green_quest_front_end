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
            <div className="flex flex-col content-center border-solid border-gray-4 00 leading-9 " >
                {associationsData && associationsData.map((association) => (
                    <div key={association.id}>
                        <h3 className="flex font-bold justify-center" >
                            {association.image} {association.title}
                        </h3>
                        <p className="flex justify-center">
                            {association.description}
                        </p>
                        <AssociationsCardsButton/>
                    </div>
                ))}
                <hr></hr>
            </div>
        </>
    )
}