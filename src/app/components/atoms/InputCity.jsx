import {useState, useEffect, useCallback} from 'react'

function debounce(fn, delay) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}

export default function InputCity({onSelect}) {
  const [query, setQuery] = useState('')
  const [villes, setVilles] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  const fetchVilles = useCallback(async (search) => {
    if (search.length < 2) {
      setVilles([])
      return
    }
    const res = await fetch(`https://geo.api.gouv.fr/communes?nom=${search}&limit=5&fields=centre`)
    const data = await res.json()
    console.log(data)
    setVilles(data)
  }, [])

  const debouncedFetch = useCallback(debounce(fetchVilles, 300), [fetchVilles])

  useEffect(() => {
    debouncedFetch(query)
  }, [query, debouncedFetch])

  const handleSelect = (city) => {
    setSelectedCity(city.nom)
    onSelect({
      title: city.nom,
      zipcode: city.code,
      lat: city.centre?.coordinates[1] || [],
      lng: city.centre?.coordinates[0] || [],
    })
    setQuery('')
    setVilles([])
  }

  return (
    <div className="relative mb-2 flex flex-col">
      <label htmlFor="city">Ville</label>
      <input
        type="text"
        name="city"
        value={selectedCity || query}
        onChange={(e) => {
          setQuery(e.target.value)
          setSelectedCity('')
        }}
        placeholder="Votre ville"
        className="mb-2 w-full rounded-md border-1 border-(--border-color) p-2 hover:border-(--primary-color-hover) hover:ring-(--primary-color-hover) focus:border-(--primary-color) focus:ring-2 focus:ring-(--primary-color) focus:outline-none"
      />
      {villes.length > 0 && (
        <ul className="z-10 w-9/10 rounded-md bg-white">
          {villes.map((ville) => (
            <li key={ville.code} onClick={() => handleSelect(ville)} className="input-city cursor-pointer rounded-md p-2 hover:bg-(--text-secondary)">
              {ville.nom} ({ville.code})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
