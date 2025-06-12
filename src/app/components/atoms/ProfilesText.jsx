export default function ProfilesText(props) {
  return (
    <>
      <div className="mr-10 flex grow flex-row justify-between gap-3 p-2">
        <h2>{props.name}</h2>
        <p>{props.city}</p>
      </div>
    </>
  )
}
