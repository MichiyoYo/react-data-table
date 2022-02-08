import React from "react";

function Row({ user }) {
  const fields = Object.values(user);
  return (
    <tr>
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
