import ListUsersLeaderboard from '@/app/components/organisms/ListUsersLeaderboard'
import {Trophy} from 'lucide-react'

export default function Leaderboard() {
  return (
    <>
      <main>
        <div className="m-auto flex max-w-[28rem] flex-col items-center rounded-lg border-0 border-(--border-color) shadow-lg">
          <p className="flex gap-1 text-center text-lg font-bold">
            {' '}
            <Trophy /> Leaderboard global
          </p>

          <div className="m-3 flex flex-col gap-2 shadow-black">
            <ListUsersLeaderboard />
          </div>
        </div>
      </main>
    </>
  )
}
