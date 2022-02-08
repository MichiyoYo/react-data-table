import React, { useContext } from "react";
import { AppContext } from "../App";
import Row from "./Row";
import { css } from "@emotion/css";

const tableStyle = css`
  background-color: #ffffffa8;
  border-radius: 10px;
  border: 1px solid #fff;
  th {
    padding: 10px;
  }
`;

function Table(props) {
  const { users } = useContext(AppContext);
  const headerFields = Object.keys(users[0]);
  return (
    <table className={tableStyle}>
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
