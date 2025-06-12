import AssociationsCardsText from '../atoms/AssociationCardsText'

export default function AssociationsCards({points}) {
  return (
    <>
      <div className="m-auto mt-4 flex w-70 flex-col items-center border-solid">
        <AssociationsCardsText points={points} />
      </div>
    </>
  )
}
