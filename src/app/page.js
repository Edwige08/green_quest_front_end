'use client'

import Button from './components/atoms/Button';
import { LogIn, PencilLine } from "lucide-react";

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
<<<<<<< HEAD
        <h1 className='text-center p-4'>Bienvenue sur Green Quest !</h1>

        <div className='flex justify-center gap-5 p-5'>
          <Button classes="bg-(--primary-color) max-w-sm text-(--third-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => {router.push('/login')}} lucide={<PencilLine />} text="Se connecter"/>
          <Button classes="bg-(--primary-color) max-w-sm text-(--third-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => {router.push('/registration')}} lucide={<LogIn />} text="S'inscrire"/>
        </div>
=======
      <div className='overflow-hidden'>
        <img src="/assets/bannerImg.jpg" className='object-cover h-120 w-full' />
      </div>
      <div className='flex gap-5 p-5'>
        <Button classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => { router.push('/login') }} lucide={<PencilLine />} text="Se connecter" />
        <Button classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => { router.push('/registration') }} lucide={<LogIn />} text="S'inscrire" />
      </div>
>>>>>>> d8dd5a8ba911044c1992a7477d8601c6b96e0bf4
    </>
  );
}
