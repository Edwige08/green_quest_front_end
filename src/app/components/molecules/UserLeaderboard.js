export default function UserLeaderboard (props) {

    return(
        <>
            <div className="border p-4 text-left transition duration-300 hover:shadow-md flex gap-3">
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