
export default function UserLeaderboard(props) {

    return (
        <>
            <div className="flex flex-row gap-3 items-center border-1 border-(--border-color) m-2 p-2 w-[26rem] h-15 rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out justify-between">
                {console.log('❤️')}

                <div className="uppercase font-bold flex gap-2 items-center">
                    <p>
                        {props.username}
                    </p>
                    <p className="flex content-center text-xl">
                        {props.index === 0 && '🏆'}
                        {props.index === 1 && '🥈'}
                        {props.index === 2 && '🥉'}
                    </p>
                </div>

                <p className="text-gray-500">
                    {props.points} points
                </p>
            </div>
        </>
    )
}