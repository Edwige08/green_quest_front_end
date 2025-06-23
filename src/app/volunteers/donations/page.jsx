'use client'

import AssociationsCards from '@/app/components/molecules/AssociationsCards'
import {useState, useEffect} from 'react'
import {Gift} from 'lucide-react'

export default function Donations() {
  const [profileUserName, setProfileUserName] = useState(null)
  const [pointsData, setPointsData] = useState()

  useEffect(() => {
    const storedName = localStorage.getItem('currentUserName')
    setProfileUserName(storedName)
  }, [])

  useEffect(() => {
    async function getVolunteerPoints() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/volunteers/${profileUserName}`)
      const data = await response.json()
      console.log('❤️', data)
      setPointsData(data.points)
    }

    getVolunteerPoints()
  }, [profileUserName])

  return (
    <main>
      <div className="m-auto flex max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) shadow-lg">
        <p className="text-center text-lg font-bold">Faire un don</p>

        <p className="flex gap-2 text-(--primary-color)">
          {' '}
          <Gift /> Points collectées : {pointsData}{' '}
        </p>
        <div className="m-3 shadow-black">
          <AssociationsCards points={pointsData} />
        </div>
      </div>
    </main>
  )
}
