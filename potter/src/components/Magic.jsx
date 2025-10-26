import { useEffect, useState } from "react";
import { apiGet } from "../utils/api";
import { Link } from "react-router-dom";


function Magic() {
  const [magic, setMagic] = useState(null); // Stav postav

  useEffect(() => { // Zavolá se při vložení komp. do stránky
    async function fetchMagic() {
        const data = await apiGet('');
        setMagic(data); // Nastaví stažené lidi do stavu postav  
        // console.log(data);
      }

    fetchMagic();

  }, []); // do pole uvádíme proměnné, při jejichž změně se má 
           // funkce spustit znovu


  if (magic == null) 
    return <p>Načítám...</p>;
  
  return (
    <div>
      <h1>All Harry Potter Magic</h1>
      {magic.map((magic, index) => (
        <div key={index}>
          <h2>{magic.name}</h2>
          <p>Description: {magic.description}</p>
        </div>
      ))}
    </div>
  );
}
export default Magic;