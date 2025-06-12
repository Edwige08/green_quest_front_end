import {ShieldAlert} from 'lucide-react'

export default function ErrorMessage({message, classes = ''}) {
  return (
    <div className={'flex justify-center border-2 border-red-500 ' + classes}>
      <ShieldAlert className="text-red-500" />
      <p className="ml-2">{message}</p>
    </div>
  )
}
