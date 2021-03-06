import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import Table from "./Components/Table";
import { css } from "@emotion/css";

export const AppContext = createContext();

const appStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to top,
    #ff8400,
    #ff383a,
    #ff006f,
    #e000ae,
    #6a00eb
  );
  h1,
  h2,
  h3,
  p {
    color: #fff;
  }
  h1 {
    margin-bottom: 40px;
  }
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (response.ok) return response.json();
        throw response;
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(`An error occurred while retrieving data: ${err}`);
        setError("An error occurred 😿");
      });
  }, []);

  return (
    <AppContext.Provider value={{ users }}>
      <div className={appStyle}>
        <h1>User Data</h1>
        {(error && <h3>{error}</h3>) || (loading && <h3>Loading ⌛</h3>) || (
          <Table />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
