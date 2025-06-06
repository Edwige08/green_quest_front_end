export default function UserLeaderboard (props) {

    return(
        <>
            <div className="flex flex-row gap-3 items-center border-1 border-(--border-color) m-2 p-2 w-[26rem] h-15 rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out">
                {console.log('❤️')}
                
                <p className="uppercase font-bold">
                    {props.username} 
                </p>
                <p className="text-gray-500">
                    {props.points} points
                </p>
            </div>
        </>
    )
}