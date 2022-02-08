import React, { useContext } from "react";
import { AppContext } from "../App";
import Row from "./Row";

function Table(props) {
  const { users } = useContext(AppContext);
  const headerFields = Object.keys(users[0]);
  return (
    <table>
      <thead>
        <tr>
          {headerFields.map((field, i) => (
            <th key={i}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <Row key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
