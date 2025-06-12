'use client'

import {useState} from 'react'

import {Heart} from 'lucide-react'

import AssociationsCardsModale from './AssociationsCardsModale'

export default function AssociationsCardsButton({points, associationName, associationId}) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      {!showModal && (
        <button
          onClick={() => setShowModal(true)}
          className="m-auto flex w-fit cursor-pointer content-center items-center gap-3 rounded-lg bg-emerald-600 px-7 py-2 font-bold text-white hover:bg-(--primary-color-hover)"
        >
          <Heart /> Faire un don
        </button>
      )}

      {showModal && (
        <AssociationsCardsModale points={points} onClose={() => setShowModal(false)} associationName={associationName} associationId={associationId} />
      )}
    </>
  )
}
