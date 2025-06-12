import {MapPin} from 'lucide-react'

export default function Collection({date, ville, wastes}) {
  const formattedDate = new Date(date).toLocaleString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <div className="m-auto mt-5 flex w-full max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) bg-(--background) p-5 shadow-lg">
      <p className="w-full text-right">{formattedDate}</p>
      <p className="mb-2 flex w-full items-center justify-start">
        <MapPin /> {ville}
      </p>
      {wastes.map((waste, index) => {
        return (
          <p className="w-full" key={index}>
            {waste.label + ':' + waste.quantity}
          </p>
        )
      })}
    </div>
  )
}
