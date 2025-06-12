'use client'

import CollectionForm from '@/app/components/organisms/CollectionForm'

export default function Collections() {
  return (
    <div className="m-auto flex max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) p-5 shadow-lg">
      <h1 className="mb-4 text-center text-lg font-bold">Enregistrer une collecte</h1>

      <CollectionForm />
    </div>
  )
}
