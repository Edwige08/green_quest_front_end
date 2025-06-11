import { MapPin } from "lucide-react";

export default function Collection ({ date, ville, wastes }) {

    const formattedDate = new Date(date).toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit', 
        second: '2-digit'
    });

    return (
        <div className="w-full flex flex-col items-center m-auto mt-5 max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg p-5">
            <p className="w-full text-right">{formattedDate}</p>
            <p className="w-full mb-2 flex items-center justify-start"><MapPin /> {ville}</p>
            {wastes.map((waste, index) => {
                return <p className="w-full" key={index}>{waste.label + ":" + waste.quantity}</p>
            })}
        </div>
    )

}