'use client'
import {Ban, Pen, SquareCheck, Trash2} from 'lucide-react'
import ProfilesButton from '../atoms/ProfilesButton'
import ProfilesText from '../atoms/ProfilesText'
import {useState} from 'react'
import VolunteerForm from '../organisms/VolunteerForm'
import Button from '../atoms/Button'
import ButtonForm from '../atoms/ButtonForm'

export default function ProfilesCard({user}) {
  const [confirmModal, setConfirmModal] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [updateModal, setUpdateModal] = useState(false)

  const firstname = user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)
  const lastname = user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)

  const toggleUpdateModal = () => {
    setUpdateModal(!updateModal)
  }

  const handleConfirm = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/volunteers/${user.username}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    setDeleted(true)
  }

  const toggleDeleteModal = () => {
    setConfirmModal(!confirmModal)
  }
  const updateUser = (updatedUser) => {
    user.firstname = updatedUser.firstname
    user.lastname = updatedUser.lastname
    user.title = updatedUser.city?.title || user.title
    toggleUpdateModal()
  }

  return (
    !deleted && (
      <div className="m-2 flex w-[26rem] w-full flex-row content-end items-center justify-between gap-3 rounded-lg border-1 border-(--border-color) p-2 hover:shadow-lg">
        <ProfilesText name={`${firstname} ${lastname}`} city={user.title} />
        <div className="flex flex-row gap-3">
          <ProfilesButton
            lucide={<Pen />}
            onClick={toggleUpdateModal}
            classes="text-(--wastePlastic) hover:bg-(--wastePlastic) bg-(--buttonBlue-background) "
          ></ProfilesButton>
          <ProfilesButton
            lucide={<Trash2 />}
            onClick={toggleDeleteModal}
            classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) "
          ></ProfilesButton>
        </div>
        {confirmModal && (
          <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center gap-4 rounded-sm bg-(--background) p-3 text-(--foreground)">
            <p>
              Confirmer la suppression de {firstname} {lastname}
            </p>
            <div className="flex flex-row gap-3">
              <ProfilesButton
                lucide={<SquareCheck />}
                onClick={handleConfirm}
                classes="text-(--wasteGlass) hover:bg-(--wasteGlass) bg-(--buttonGreen-background) "
              />
              <ProfilesButton
                lucide={<Ban />}
                onClick={toggleDeleteModal}
                classes="text-(--wasteOthers) hover:bg-(--wasteOthers) bg-(--buttonRed-background) "
              />
            </div>
          </div>
        )}
        {updateModal && (
          <VolunteerForm
            title="Modifier le bénévole"
            onSubmit={updateUser}
            user={user}
            classes={'absolute bg-(--background) text-(--foreground) top-0 left-0 w-full  rounded-sm z-100'}
          >
            <div className="flex flex-row gap-3">
              <ButtonForm type="submit" text={'Modifier'} classes={'bg-(--primary-color) text-(--background) hover:bg-(--primary-color-hover) mb-2'} />
              <Button
                type="button"
                onClick={toggleUpdateModal}
                classes="bg-(--text-secondary) text-(--background) hover:bg-(--text-secondary-hover) "
                text={'Annuler'}
              ></Button>
            </div>
          </VolunteerForm>
        )}
      </div>
    )
  )
}
