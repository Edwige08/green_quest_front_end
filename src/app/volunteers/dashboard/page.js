'use client'
import WasteList from "@/app/components/molecules/WasteList";
import * as Icons from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [wastedata, setWastedata] = useState([])
    const [displayedMonth, setDisplayedMonth] = useState(0)

    async function fetchWastes() {
        const promise = await fetch('http://localhost:5001/wastes');
        const data = await promise.json();
        setWastedata(data)
    }

    function nextMonth() {
        // let newMonth = displayedMonth + 1;
        setDisplayedMonth(displayedMonth + 1)
    }

    function lastMonth() {
        // let newMonth = displayedMonth - 1;
        setDisplayedMonth(displayedMonth - 1)
    }

    useEffect(() => {
        fetchWastes()
    }, [])

    useEffect(() => {
    }, [wastedata])


    // TODO : fetch nombre de collectes
    // TODO : Afficher nombre de collectes en fonction du mois
    // TODO : Récupérer le nom de la personne connectée à la place de "Phoebe"
    // REFACTO : Simplifier affichage du mois et de l'année.

    const profileFirstName = "Phoebe";
    const todayDate = new Date();
    const todayDateString = todayDate.toLocaleDateString();
    const thisYear = todayDateString.substring(6);
    let thisMonth = todayDateString.substring(3, 5);
    setDisplayedMonth(thisMonth);
    let letterMonth = ""
    switch (thisMonth) {
        case "01":
            letterMonth = "Janvier";
            break;
        case "02":
            letterMonth = "Février";
            break;
        case "03":
            letterMonth = "Mars";
            break;
        case "04":
            letterMonth = "Avril";
            break;
        case "05":
            letterMonth = "Mai";
            break;
        case "06":
            letterMonth = "Juin";
            break;
        case "07":
            letterMonth = "Juillet";
            break;
        case "08":
            letterMonth = "Août";
            break;
        case "09":
            letterMonth = "Septembre";
            break;
        case "10":
            letterMonth = "Octobre";
            break;
        case "11":
            letterMonth = "Novembre";
            break;
        case "12":
            letterMonth = "Décembre";
            break;
    }
    return (
        <div className="flex flex-col items-center m-auto max-w-[28rem] bg-[white] border-(--border-color) border-0 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2 m-4">
                <p className="text-center font-bold text-lg">Bonjour {profileFirstName} !</p>
                <div className="flex flex-row gap-2">
                    <button onClick={lastMonth} className="rounded-full p-1 hover:bg-(--border-color)">
                        <Icons.ChevronLeft />
                    </button>
                    <p className="flex w-[15rem] items-center justify-center">{letterMonth + " " + thisYear}</p>
                    <button onClick={nextMonth} className="rounded-full p-1 hover:bg-(--border-color)">
                        <Icons.ChevronRight />
                    </button>
                </div>
            </div>
            <div>
                {wastedata && wastedata.map((waste, index) => {
                    const Icon = Icons[waste.logo_lucide];
                    return (
                        <div className="flex flex-row border-1 border-(--border-color) m-2 p-2 w-[26rem] rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out">
                            <div className="flex justify-center items-center">
                                <p
                                    className="flex justify-center items-center p-2 m-2 rounded-lg size-[45px] bg-(--wasteOthers) text-white"
                                    key={index} >
                                    <Icon />
                                </p>
                            </div>
                            <div className="flex flex-col p-2">
                                <p key={index} >{waste.label.substring(2)}</p>
                                <p className="text-(--text-secondary)">Nombre de collectes</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}