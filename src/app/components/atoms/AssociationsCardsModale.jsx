import {useState} from 'react'
import Button from './Button'

export default function AssociationsCardsModale({onClose, associationName, points, associationId}) {
  const [donationMade, setDonationMade] = useState(false)
  const [donation, setDonation] = useState(0)

  const handleChange = (e) => {
    setDonation(e.target.value)
    console.log(donation)
  }

  const handleDonation = async () => {
    //     const data = {
    //         vol
    //     }
    //     const response = await fetch("http://localhost:5001/donations", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    setDonationMade(true)
  }
  return (
    <>
      <div className="flex w-full items-center justify-center">
        {!donationMade && (
          <div className="flex w-full flex-col items-center gap-3 rounded p-3 shadow-lg">
            <div>
              <input
                type="number"
                step={100}
                placeholder="100 ?"
                list="defaultNumbers"
                min={0}
                max={points}
                className="w-20 rounded-md border p-1"
                onChange={handleChange}
              ></input>
              points
            </div>

            <div className="flex w-full flex-row gap-3 text-(--background)">
              <Button onClick={handleDonation} text={'Donner'} classes={'bg-(--primary-color)  hover:bg-(--primary-color-hover) mb-2 w-full'} />
              <Button type="button" onClick={onClose} classes="bg-(--text-secondary)  hover:bg-(--text-secondary-hover) " text={'Annuler'}></Button>
            </div>
          </div>
        )}
        {donationMade && (
          <p
            onClick={onClose}
            className="m-auto flex w-fit cursor-pointer content-center items-center gap-3 rounded bg-emerald-600 px-7 py-2 font-bold text-white"
          >
            Merci pour le don de {donation} points à {associationName}
          </p>
        )}
      </div>
    </>
  )
}
