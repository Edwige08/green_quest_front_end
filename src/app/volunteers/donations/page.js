import AssociationsCards from "@/app/components/molecules/AssociationsCards";
import { Gift } from "lucide-react";

export default function Donations() {

    const collectedPoints = "500"
    return (
        <main>
            <div className="flex flex-col items-center m-auto max-w-[28rem] bg-[white] border-(--border-color) border-0 rounded-lg shadow-lg">
                <p className="text-center font-bold text-lg">Faire un don</p>

                <p className="flex gap-2 text-(--primary-color) "> <Gift /> Points collectées : {collectedPoints}  </p>
            
                <div className="shadow-black m-3 ">
                    <AssociationsCards />
                </div>
            </div>
        </main >
    );
}