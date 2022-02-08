import React, { useContext } from "react";
import { AppContext } from "../App";
import Row from "./Row";

function Table(props) {
  const { users } = useContext(AppContext);

  return (
    <div className="Table">
      <Row header={true} />
      {users.map((user) => (
        <Row key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Table;
