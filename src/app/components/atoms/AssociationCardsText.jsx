'use client'
import {useEffect, useState} from 'react'
import AssociationsCardsButton from './AssociationCardsButton'

export default function AssociationsCardsText({points}) {
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
      <div className="flex w-100 flex-col content-center gap-3 leading-9">
        {associationsData &&
          associationsData.map((association) => (
            <div
              key={association.id}
              className="rounded-lg border-1 border-(--border-color) p-2 duration-[0.2s] ease-in-out hover:translate-y-[-3px] hover:shadow-lg"
            >
              <h3 className="flex justify-center font-bold">
                {association.image} {association.title}
              </h3>
              <p className="line-1 flex justify-center leading-5">{association.description}</p>
              <hr className="m-4 border-1 border-(--border-color)"></hr>
              <AssociationsCardsButton points={points} associationName={association.title} associationId={association.id} />
            </div>
          ))}
      </div>
    </>
  )
}
