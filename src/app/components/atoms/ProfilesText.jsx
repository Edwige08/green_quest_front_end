export default function ProfilesText (props) {
    return (
        <>
        <div className="flex flex-row grow gap-3 justify-between p-2 mr-10">
            
            <h2>{props.name}</h2>
            <p>{props.city}</p>
        </div>
        </>
    )
}