'use client'

import LoginForm from '../components/organisms/LoginForm'

export default function Login() {
  return (
    <>
      <div className="mx-auto mt-5 w-1/2 rounded-md p-5 shadow-md">
        <h1 className="mt-5 mb-2 text-center font-semibold">Connexion</h1>
        <LoginForm />
      </div>
    </>
  )
}
