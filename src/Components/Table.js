import React, { useContext } from "react";
import { AppContext } from "../App";
import Row from "./Row";

function Table(props) {
  const { users } = useContext(AppContext);

  return (
    <table>
      {users.map((user) => (
        <Row key={user.id} user={user} />
      ))}
    </table>
  );
}

export default Table;
