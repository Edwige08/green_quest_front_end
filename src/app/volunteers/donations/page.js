'use client'

import Points from "@/app/components/atoms/Points";
import AssociationsCards from "@/app/components/molecules/AssociationsCards";

export default function Donations() {



    return (
        <main>
            <div className="flex flex-col items-center m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg">
                <p className="text-center font-bold text-lg">Faire un don</p>

                <Points />
                <div className="shadow-black m-3 ">
                    <AssociationsCards />
                </div>
            </div>
        </main >
    );
}