'use client'
import * as Icons from 'lucide-react'
import {useEffect, useState} from 'react'

export default function Dashboard() {
  const options = {month: 'long'} // Sert à l'affichage du mois en lettres
  const [currentDate, setCurrentDate] = useState(new Date()) // Date au format long
  const [wastedata, setWastedata] = useState([])
  const [amountWastesByMonth, setAmountWastesByMonth] = useState([])
  const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth()) // Numéro du mois
  const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear()) // Numéro de l'année
  const [profile, setProfile] = useState({})
  // Fonction qui retourne le mois en lettres :
  function getCurrentMonthinLetter(myDate) {
    return new Intl.DateTimeFormat('fr-FR', options).format(myDate)
  }

  // Fonction de récupération de la liste des déchets :
  async function fetchWastes() {
    const promise = await fetch('http://localhost:5001/wastes')
    const data = await promise.json()
    setWastedata(data)
  }

  // Fonction de récupération des déchets ramassés selon le mois et l'user :
  async function fetchAmountWastesByMonth(userId) {
    let dateForRequest = displayedMonth < 9 ? `${displayedYear}-0${displayedMonth + 1}-01` : `${displayedYear}-${displayedMonth + 1}-01` // Attention, mois = 6 et non 06 !!! donc chemin ne marche pas
    const promise = await fetch(`http://localhost:5001/collections/${profile.id}/${dateForRequest}`)
    const data = await promise.json()
    setAmountWastesByMonth(data)
  }

  function nextMonth() {
    if (displayedMonth === 11) {
      currentDate.setMonth(0)
      setDisplayedMonth(0)
      setDisplayedYear(displayedYear + 1)
    } else {
      currentDate.setMonth(displayedMonth + 1)
      setDisplayedMonth(displayedMonth + 1)
    }
  }

  function lastMonth() {
    if (displayedMonth === 0) {
      currentDate.setMonth(11)
      setDisplayedMonth(11)
      setDisplayedYear(displayedYear - 1)
    } else {
      currentDate.setMonth(displayedMonth - 1)
      setDisplayedMonth(displayedMonth - 1)
    }
  }

  useEffect(() => {
    const storedName = localStorage.getItem('currentUserName')
    const storedId = localStorage.getItem('currentUserId')
    const storedProfile = {
      username: storedName,
      id: storedId,
    }
    setProfile(storedProfile)
    console.log(profile)
  }, [])

  useEffect(() => {
    fetchWastes()
  }, [])

  useEffect(() => {
    fetchAmountWastesByMonth(profile.id)
  }, [profile])

  useEffect(() => {
    fetchAmountWastesByMonth(profile.id)
  }, [displayedMonth, profile])

  return (
    <div className="m-auto flex max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) shadow-lg">
      <div className="m-4 flex flex-col gap-2">
        <p className="text-center text-lg font-bold">Bonjour {profile.username} !</p>
        <div className="flex flex-row gap-2">
          <button onClick={lastMonth} className="rounded-full p-1 duration-[0.3s] ease-in-out hover:bg-(--border-color)">
            <Icons.ChevronLeft />
          </button>
          <p className="flex w-[15rem] items-center justify-center">{getCurrentMonthinLetter(currentDate) + ' ' + displayedYear}</p>
          <button onClick={nextMonth} className="rounded-full p-1 duration-[0.3s] ease-in-out hover:bg-(--border-color)">
            <Icons.ChevronRight />
          </button>
        </div>
      </div>
      <div>
        {wastedata &&
          wastedata.map((waste, index) => {
            const Icon = Icons[waste.logo_lucide]
            return (
              <div
                key={index}
                className="m-2 flex w-[26rem] flex-row rounded-lg border-1 border-(--border-color) p-2 duration-[0.2s] ease-in-out hover:translate-y-[-3px] hover:shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <p className="m-2 flex size-[45px] items-center justify-center rounded-lg bg-(--wasteOthers) p-2 text-white">
                    <Icon />
                  </p>
                </div>
                <div className="flex flex-col p-2">
                  <p key={index}>{waste.label.substring(2)}</p>
                  <p className="text-(--text-secondary)">
                    {amountWastesByMonth[index]?.sum ? amountWastesByMonth[index].sum : 0} {amountWastesByMonth[index]?.sum > 1 ? 'collectés' : 'collecté'}
                  </p>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
