export default function AssociationsCardsModale({ onClose }) {
    return (
        <>
            <div className=" flex justify-center items-center">
                <div className="bg-white p-6 rounded shadow-lg">
                    <p className="flex content-center items-center gap-3 m-auto cursor-pointer bg-emerald-600 text-white font-bold py-2 px-7 rounded w-fit " >
                        Merci pour le don de 'NOMBRE DE POINTS' points à 'RENTRER ICI LE NOM DE L'ASSO'
                    </p>
                    <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                        X
                    </button>
                </div>
            </div>

        </>
    )
}