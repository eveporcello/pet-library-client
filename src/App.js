import React from "react";
import { useQuery, gql } from "@apollo/client";
import mutation from "./mutation";
import "./App.css";
import logo from "./logo.svg";

export const QUERY = gql`
  query GetDarkModePets {
    isDarkMode @client
    allPets {
      id
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery(QUERY);

  let classNames = "App";

  if (data?.isDarkMode) {
    classNames += " dark";
  }

  if (loading) return <p>Loading...</p>;
  return (
    <div className={classNames}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="checkbox"
          id="switch"
          onChange={mutation}
        />
        <label htmlFor="switch">Dark Mode Toggle</label>
      </header>
      <section>
        <ul>
          {data.allPets.map(pet => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
