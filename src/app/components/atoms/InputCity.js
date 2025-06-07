import { useState, useEffect, useCallback } from 'react';

function debounce(fn, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

export default function InputCity({onSelect}) {
    const [query, setQuery] = useState('');
    const [villes, setVilles] = useState([]);
    const [selectedCity, setSelectedCity] = useState("")

    const fetchVilles = useCallback(async (search) => {
        if (search.length < 2) {
            setVilles([]);
            return;
        }
        const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${search}&limit=5 &fields=centre`);
        const data = await res.json();
        console.log(data)
        setVilles(data);
    }, []);

    const debouncedFetch = useCallback(debounce(fetchVilles, 300), [fetchVilles]);

    useEffect(() => {
        debouncedFetch(query);
    }, [query, debouncedFetch]);

    const handleSelect = (city) => {
        setSelectedCity(city.nom);
        onSelect({
            title: city.nom,
            zipcode: city.code,
            lat: city.centre?.coordinates[1] || [],
            lng: city.centre?.coordinates[0] || [] 
        })
        setQuery("")
        setVilles([]);
    };

    return (
        <div className="relative flex-col flex mb-2">
            <label htmlFor='city'>Ville</label>
            <input
                type="text"
                name='city'
                value={selectedCity || query}
                onChange={e => {
                    setQuery(e.target.value)
                    setSelectedCity("")
                }}
                placeholder="Entrez une ville..."
                className=" p-2 w-full border-2 border-black-200 rounded-md focus:outline-none focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color) hover:border-(--primary-color-hover) hover:ring-(--primary-color-hover) mb-2 "
            />
            {villes.length > 0 && (
                <ul className=" bg-white rounded-md  w-9/10 z-10 ">
                    {villes.map(ville => (
                        <li
                            key={ville.code}
                            onClick={() => handleSelect(ville)}
                            className="p-2 rounded-md hover:bg-(--text-secondary)   cursor-pointer input-city"
                        >
                            {ville.nom} ({ville.code})
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}


