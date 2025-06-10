import Collection from "../atoms/collection";

export default function CollectionList ({ data }) {
    console.log("lalala")
    console.log(data)
    return (
        <div className="w-full flex flex-col items-center m-auto mt-5 max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg p-5">
            <h2 className="text-left w-full">Mes collectes du jour ({data.length})</h2>
            {data.map(collect => {
                <Collection date={collect?.date} ville={collect?.ville} wastes={collect?.colectWastes}/>
            })}
        </div>
    )
}