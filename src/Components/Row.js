import React from "react";
import { css } from "@emotion/css";

const rowStyle = css`
  background: blue;
  text-align: center;
  padding: 10px;
  background: #ffffffc2;
  &:nth-child(even) {
    background: #f5f5f5c2;
  }
  td {
    padding: 10px;
  }
`;

function Row({ user }) {
  const fields = Object.values(user);
  return (
    <tr className={rowStyle}>
      {fields.map((field, i) => {
        if (typeof field !== "object") {
          return <td key={i}>{field}</td>;
        } else {
          return <td key={i}>{Object.values(field)[0]}</td>;
        }
      })}
    </tr>
  );
}

export default Row;
