import {Recycle} from 'lucide-react'

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-1 bg-(--primary-color) p-4 text-(--background)">
      <h1 className="flex flex-row gap-2 text-xl font-bold">
        <Recycle />
        Green Quest
      </h1>
      <p className="text-(--secondary-color)">Agir pour un environnement plus propre</p>
    </header>
  )
}
