'use client'

import Button from '../components/atoms/Button'
import {LogIn} from 'lucide-react'

import {useRouter} from 'next/navigation'
import VolunteerForm from '../components/organisms/VolunteerForm'

export default function registrationPage() {
  const router = useRouter()

  return (
    <>
      <VolunteerForm />
      <Button
        classes="bg-(--primary-color) hover:bg-(--primary-color-hover)"
        type="button"
        onClick={() => {
          router.push('/login')
        }}
        lucide={<LogIn />}
        text="Se connecter"
      />
    </>
  )
}
