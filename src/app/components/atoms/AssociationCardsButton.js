'use client'

import { Heart } from "lucide-react"
import AssociationsCardsModale from "./AssociationsCardsModale"
import { useState } from "react"

export default function AssociationsCardsButton() {

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="flex content-center items-center gap-3 m-auto cursor-pointer bg-emerald-600 hover:bg-(--primary-color-hover) text-white font-bold py-2 px-7 rounded-lg w-fit ">
                <Heart /> Faire un don
            </button>

            {showModal && (
                <AssociationsCardsModale onClose={() => setShowModal(false)} />
            )}
        </>
    )
}