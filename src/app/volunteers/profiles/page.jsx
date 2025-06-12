'use client'
import Button from '@/app/components/atoms/Button'
import ButtonForm from '@/app/components/atoms/ButtonForm'
import VolunteerForm from '@/app/components/organisms/VolunteerForm'
import {LogOut, Save} from 'lucide-react'
import {useRouter} from 'next/navigation'

export default function Profiles() {
  const router = useRouter()

  const handleClick = () => {
    localStorage.clear()
    router.push(`http://localhost:${process.env.NEXT_PUBLIC_PORT}`)
  }
  return (
    <>
      <div className="m-auto flex max-w-[28rem] flex-col items-center">
        <VolunteerForm title={'Mon profil'}>
          <ButtonForm
            type="submit"
            lucide={<Save />}
            text={'Mise à jour'}
            classes={'bg-(--primary-color) text-(--background) hover:bg-(--primary-color-hover) mb-2'}
          />
          <Button
            type="button"
            onClick={handleClick}
            lucide={<LogOut />}
            classes="bg-(--text-secondary) text-(--background) hover:bg-(--text-secondary-hover)"
            text={'Déconnexion'}
          ></Button>
        </VolunteerForm>
      </div>
    </>
  )
}
