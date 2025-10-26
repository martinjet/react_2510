import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGet } from "../utils/api";

function Person() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    async function fetchPerson() {
      const data = await apiGet(`people/${id}`);
      setPerson(data);
    }

    fetchPerson();
  }, [id]); // Při změně id se zavolá dotaz znovu

    if (person == null) return <p>Načítám...</p>;

  return (
    <div>
      <h1>{person.name}</h1>
      <p>Výška: {person.height}</p>
      <p>Váha: {person.mass}</p>
      <p>Barva očí: {person.eye_color}</p>
      <button onClick={() => navigate(-1)}>Zpět</button>
    </div>
  );

}
export default Person;
