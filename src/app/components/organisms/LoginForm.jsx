'use client'

import InputLabel from '../atoms/InputLabel'
import ButtonForm from '../atoms/ButtonForm'
import ErrorMessage from '../atoms/ErrorMessage'

import {useState, useEffect} from 'react'
import {LogIn} from 'lucide-react'
import {useRouter} from 'next/navigation'

import Form from 'next/form'

export default function LoginForm() {
  const router = useRouter()

  const [dataForm, setDataForm] = useState({
    // username: "",
    // password: ""
  })

  const [borderUsername, setBorderUsername] = useState('border-2 border-black-200')
  const [borderPassword, setBorderPassword] = useState('border-2 border-black-200')

  const [errorDisplay, setErrorDisplay] = useState('hidden')
  const [errorMessage, setErrorMessage] = useState('error')

  const [disabledButton, setDisabledButton] = useState(true)
  const [displayLoader, setDisplayLoader] = useState('hidden')

  useEffect(() => {
    const areInputsFilled = (dataForm.username?.trim() || '') && (dataForm.password?.trim() || '')
    setDisabledButton(!areInputsFilled)
  }, [dataForm.username, dataForm.password])

  const handleChangeUsername = (value, name) => {
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    setBorderUsername('border-2 border-black-200')
  }

  const handleChangePassword = (value, name) => {
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }))

    setBorderPassword('border-2 border-black-200')
  }

  const saveCurrentUser = (user) => {
    localStorage.setItem('currentUserId', user.currentUser.userId)
    localStorage.setItem('currentUserName', user.currentUser.userName)
  }

  const redirectToDashboard = () => {
    const username = localStorage.getItem('currentUserName')

    if (username === 'admin') {
      console.log(true)
      router.push('/admin/volunteers-management')
    } else {
      console.log(false)
      router.push('/volunteers/dashboard')
    }
  }

  const checkAutentification = async (e) => {
    e.preventDefault()
    setDisplayLoader('block')

    dataForm.username ? setBorderUsername('border-2 border-black-200') : setBorderUsername('border-2 border-red-500')

    dataForm.password ? setBorderPassword('border-2 border-black-200') : setBorderPassword('border-2 border-red-500')

    const body = {
      username: dataForm.username,
      passwordToCheck: dataForm.password,
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/volunteers/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    const datas = {status: response.status, currentUser: await response.json()}

    if (datas.status == 401) {
      setErrorDisplay('block')
      setErrorMessage(datas.currentUser.message)
      setDisplayLoader('hidden')
    } else if (datas.status == 200) {
      saveCurrentUser(datas)
      redirectToDashboard()
    }

    return datas
  }

  return (
    <Form className="relative" onSubmit={checkAutentification}>
      <ErrorMessage message={errorMessage} classes={errorDisplay} />
      <InputLabel
        onChange={handleChangeUsername}
        name="Pseudo*"
        dataName="username"
        placeholder="Votre pseudo"
        type="text"
        maxLength="30"
        classes={borderUsername}
      />
      <InputLabel
        onChange={handleChangePassword}
        name="Mot de passe*"
        dataName="password"
        placeholder="Votre mot de passe"
        type="password"
        maxLength="30"
        classes={borderPassword}
      />
      <ButtonForm
        type="submit"
        classes="bg-(--primary-color) hover:bg-(--primary-color-hover) disabled:opacity-50 disabled:cursor-default"
        lucide={<LogIn />}
        text="Se connecter"
        disabled={disabledButton}
      />
      <div
        className={
          displayLoader +
          ' absolute top-1/2 left-1/2 flex h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-md bg-(--secondary-color) shadow-lg'
        }
      >
        <div className="flex h-[50px] w-[50px] items-center justify-center">
          <span className="loader"></span>
        </div>
      </div>
    </Form>
  )
}
