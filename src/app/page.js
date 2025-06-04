'use client'

import Button from './components/atoms/Button';
import { LogIn, PencilLine } from "lucide-react";

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <>
        <h1 className='text-center'>Bienvenue sur Green Quest !</h1>

        <div className='flex gap-5 p-5'>
          <Button classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => {router.push('/login')}} lucide={<PencilLine />} text="Se connecter"/>
          <Button classes="bg-(--primary-color) hover:bg-(--primary-color-hover)" type="button" onClick={() => {router.push('/registration')}} lucide={<LogIn />} text="S'inscrire"/>
        </div>
    </>
  );
}
