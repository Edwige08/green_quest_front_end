export default function UserLeaderboard(props) {
  return (
    <>
      <div className="m-2 flex h-15 w-[26rem] flex-row items-center justify-between gap-3 rounded-lg border-1 border-(--border-color) p-2 duration-[0.2s] ease-in-out hover:translate-y-[-3px] hover:shadow-lg">
        {console.log('❤️')}

        <div className="flex items-center gap-2 font-bold uppercase">
          <p>{props.username}</p>
          <p className="flex content-center text-xl">
            {props.index === 0 && '🏆'}
            {props.index === 1 && '🥈'}
            {props.index === 2 && '🥉'}
          </p>
        </div>

        <p className="text-gray-500">{props.points} points</p>
      </div>
    </>
  )
}
