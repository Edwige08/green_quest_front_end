'use client';

import CollectionForm from "@/app/components/organisms/CollectionForm";

export default function Collections () {

    

    return (
        <div className="flex flex-col items-center m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg p-5">
            <h1 className="text-center font-bold text-lg mb-4">Enregistrer une collecte</h1>

            <CollectionForm />
        </div>
    );
}