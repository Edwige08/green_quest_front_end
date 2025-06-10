import { useEffect, useState } from "react";

export default function CitySelect({ onSelect }) {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");


  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch("http://localhost:5001/cities");
        const data = await response.json();
        setCities(data);
      } catch (error) {
        console.error("Erreur lors du fetch des villes :", error);
      }
    };

    fetchCities();
  }, []);

 
  const handleChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    onSelect(city); 
  };

  return (
    <div className="mb-2 w-full ">
      <select
        id="city-select"
        value={selectedCity}
        onChange={handleChange}
        className="border p-2 rounded w-full bg-(--background) text-(--foreground)"
      >
        <option value="">Toutes les villes</option>
        {cities.map((city) => (
          <option key={city.id} value={city.title}>
            {city.title}
          </option>
        ))}
      </select>
    </div>
  );
}