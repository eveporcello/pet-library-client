import React from "react";
import { useQuery, gql } from "@apollo/client";
import "./App.css";

const PET_FIELDS = gql`
  fragment PetFields on Pet {
    id
    name
    category
  }
`;

const QUERY = gql`
  ${PET_FIELDS}
  query AllPets {
    allPets {
      isAdmin @client
      ...PetFields
    }
  }
`;

function App() {
  const { data, loading } = useQuery(QUERY);

  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <section>
        <ul>
          {data.allPets.map((pet) => (
            <li key={pet.id}>{pet.name} {pet.isAdmin ? "admin" : "not admin"}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
