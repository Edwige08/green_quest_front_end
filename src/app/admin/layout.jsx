'use client'

import {Sprout, Trophy, LogOut} from 'lucide-react'
import Navbar from '../components/organisms/Navbar'
import Button from '@/app/components/atoms/Button'
import {useRouter} from 'next/navigation'

export default function Admin({children}) {
  const router = useRouter()

  let items = [
    {lucide: <Sprout />, text: 'Gestion des bénévoles', link: './volunteers-management'},
    {lucide: <Trophy />, text: 'Leaderboard', link: './leaderboard'},
  ]

  const handleClick = () => {
    localStorage.clear()
    router.push(`http://localhost:${process.env.NEXT_PUBLIC_PORT}`)
  }

  return (
    <>
      <Navbar items={items} />
      <div className="m-auto flex w-full flex-col items-center bg-(--background-color) p-2 text-(--foreground)">{children}</div>
      <div className="m-auto flex max-w-[28rem] flex-col items-center">
        <Button
          type="button"
          onClick={handleClick}
          lucide={<LogOut />}
          classes="bg-(--text-secondary) text-(--background) hover:bg-(--text-secondary-hover)"
          text={'Déconnexion'}
        ></Button>
      </div>
    </>
  )
}
