'use client'

import Button from './components/atoms/Button'
import {LogIn, PencilLine} from 'lucide-react'

import {useRouter} from 'next/navigation'

export default function LandingPage() {
  const router = useRouter()

  return (
    <>
      <div className="overflow-hidden">
        <img src="/assets/bannerImg.jpg" className="h-120 w-full object-cover" />
      </div>
      <div className="flex justify-center gap-5 p-5">
        <Button
          classes="bg-(--primary-color) max-w-sm text-(--third-color) hover:bg-(--primary-color-hover)"
          type="button"
          onClick={() => {
            router.push('/login')
          }}
          lucide={<PencilLine />}
          text="Se connecter"
        />
        <Button
          classes="bg-(--primary-color) max-w-sm text-(--third-color) hover:bg-(--primary-color-hover)"
          type="button"
          onClick={() => {
            router.push('/registration')
          }}
          lucide={<LogIn />}
          text="S'inscrire"
        />
      </div>
    </>
  )
}
