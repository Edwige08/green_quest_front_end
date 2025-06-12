'use client'

import {useEffect, useState} from 'react'
import InputCity from '../atoms/InputCity'
import InputLabel from '../atoms/InputLabel'

export default function VolunteerForm({children, user, title, classes, onSubmit}) {
  const [villeData, setVilleData] = useState(null)
  const [dataForm, setDataForm] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (user) {
      setDataForm({
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        email: user.email,
      })
    }
  }, [])

  const handleVilleSelect = (data) => {
    console.log('Ville sélectionnée :', data)
    setVilleData(data)
  }

  const handleChange = (value, name) => {
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const final = {
      ...dataForm,
      ...(villeData && {city: {...villeData}}),
    }
    if (onSubmit?.name == 'newUser') {
      const requiredFields = ['firstname', 'lastname', 'username', 'email', 'password', 'city']
      const missingFields = requiredFields.filter((field) => !final[field])
      if (missingFields.length > 0) {
        setErrorMessage(`Veuillez remplir tous les champs !`)
        return
      }
      onSubmit(final)
    } else {
      const userId = user?.id || localStorage.getItem('currentUserId')

      const response = await fetch(`http://localhost:5001/volunteers/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(final),
      })
      const result = await response.text()
      if (response.status == 401) {
        setErrorMessage(result)
      } else {
        setErrorMessage('')
      }
      setDataForm({})
      setVilleData(null)
      if (onSubmit?.name === 'updateUser') {
        onSubmit(final)
      }
      console.log(dataForm)
    }
  }

  return (
    <div className={'flex w-full flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) text-(--foreground) shadow-lg ' + classes}>
      <h2>{title}</h2>
      <form className="flex w-full flex-col rounded-sm p-3" onSubmit={handleSubmit}>
        <InputLabel name="Prénom" type="text" dataName="firstname" placeholder="Votre prénom" value={dataForm.firstname || ''} onChange={handleChange} />
        <InputLabel name="Nom" type="text" dataName="lastname" placeholder="Votre nom" value={dataForm.lastname || ''} onChange={handleChange} />
        <InputLabel name="Pseudo" type="text" dataName="username" placeholder="Votre pseudo" value={dataForm.username || ''} onChange={handleChange} />
        <InputLabel name="Email" type="text" dataName="email" placeholder="Votre email" value={dataForm.email || ''} onChange={handleChange} />
        <InputLabel
          name="Mot de passe"
          type="password"
          dataName="password"
          placeholder="Votre mot de passe"
          value={dataForm.password || ''}
          onChange={handleChange}
        />
        <InputCity onSelect={handleVilleSelect}></InputCity>
        {errorMessage && <div className="mt-2 text-sm font-medium text-red-800">{errorMessage}</div>}
        {children}
      </form>
    </div>
  )
}
