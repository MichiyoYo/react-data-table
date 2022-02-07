import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import Table from "./Components/Table";

export const AppContext = createContext();

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
      })
      .catch((err) => {
        console.error(`An error occurred while retrieving data: ${err}`);
        setError("An error occurred 💔");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider value={users}>
      <div className="App">
        <h1>User Data</h1>
        {error || loading || <Table />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
