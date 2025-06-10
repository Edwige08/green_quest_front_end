'use client'
import WasteList from "@/app/components/molecules/WasteList";
import * as Icons from "lucide-react";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const profileFirstName = localStorage.getItem("currentUserName");    // /!\ A RECUPERER SELON PROFIL CONNECTE
    const profileId = localStorage.getItem("currentUserId");                  // /!\ A RECUPERER SELON PROFIL CONNECTE

    const options = { month: "long" };                                              // Sert à l'affichage du mois en lettres
    const [currentDate, setCurrentDate] = useState(new Date());                     // Date au format long
    const [wastedata, setWastedata] = useState([]);
    const [amountWastesByMonth, setAmountWastesByMonth] = useState([]);
    const [displayedMonth, setDisplayedMonth] = useState(currentDate.getMonth());   // Numéro du mois
    const [displayedYear, setDisplayedYear] = useState(currentDate.getFullYear());  // Numéro de l'année

    // Fonction qui retourne le mois en lettres : 
    function getCurrentMonthinLetter (myDate) {
        return new Intl.DateTimeFormat("fr-FR", options).format(myDate)
    }

    // Fonction de récupération de la liste des déchets : 
    async function fetchWastes() {
        const promise = await fetch('http://localhost:5001/wastes');
        const data = await promise.json();
        setWastedata(data);
    }
    
    // Fonction de récupération des déchets ramassés selon le mois et l'user :
    async function fetchAmountWastesByMonth(userId) {
        let dateForRequest = displayedMonth < 9 ? `${displayedYear}-0${displayedMonth + 1}-01` : `${displayedYear}-${displayedMonth + 1}-01`;     // Attention, mois = 6 et non 06 !!! donc chemin ne marche pas
        const promise = await fetch(`http://localhost:5001/collections/${userId}/${dateForRequest}`);
        const data = await promise.json();
        setAmountWastesByMonth(data);
    }

    function nextMonth() {
        if (displayedMonth === 11) {
            currentDate.setMonth(0)
            setDisplayedMonth(0)
            setDisplayedYear(displayedYear + 1)
        } else {
            currentDate.setMonth(displayedMonth + 1)
            setDisplayedMonth(displayedMonth + 1)
        }
    }

    function lastMonth() {
        if (displayedMonth === 0) {
            currentDate.setMonth(11)
            setDisplayedMonth(11)
            setDisplayedYear(displayedYear - 1)
        } else {
            currentDate.setMonth(displayedMonth - 1)
            setDisplayedMonth(displayedMonth - 1)
        }
    }

    useEffect(() => {
        fetchWastes()
    }, [])
    useEffect(() => {
        fetchAmountWastesByMonth(profileId)
    }, [])
    useEffect(() => {
        fetchAmountWastesByMonth(profileId)
    }, [displayedMonth])

    return (
        <div className="flex flex-col items-center m-auto max-w-[28rem] bg-(--background) border-(--border-color) border-0 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2 m-4">
                <p className="text-center font-bold text-lg">Bonjour {profileFirstName} !</p>
                <div className="flex flex-row gap-2">
                    <button onClick={lastMonth} className="rounded-full p-1 hover:bg-(--border-color) duration-[0.3s] ease-in-out">
                        <Icons.ChevronLeft />
                    </button>
                    <p className="flex w-[15rem] items-center justify-center">{getCurrentMonthinLetter(currentDate) + " " + displayedYear}</p>
                    <button onClick={nextMonth} className="rounded-full p-1 hover:bg-(--border-color) duration-[0.3s] ease-in-out">
                        <Icons.ChevronRight />
                    </button>
                </div>
            </div>
            <div>
                {wastedata && wastedata.map((waste, index) => {
                    const Icon = Icons[waste.logo_lucide];
                    return (
                        <div key={index} className="flex flex-row border-1 border-(--border-color) m-2 p-2 w-[26rem] rounded-lg hover:shadow-lg hover:translate-y-[-3px] duration-[0.2s] ease-in-out">
                            <div className="flex justify-center items-center">
                                <p className="flex justify-center items-center p-2 m-2 rounded-lg size-[45px] bg-(--wasteOthers) text-white">
                                    <Icon />
                                </p>
                            </div>
                            <div className="flex flex-col p-2">
                                <p key={index} >{waste.label.substring(2)}</p>
                                <p className="text-(--text-secondary)">{amountWastesByMonth[index]?.sum ? amountWastesByMonth[index].sum : 0} {amountWastesByMonth[index]?.sum > 1 ? 'collectés' : 'collecté'}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
}