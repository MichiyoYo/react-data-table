import React from "react";

function Cell({ user }) {
  return Object.values(user).map((value) => {
    if (typeof value !== "object") return <td>{value}</td>;
  });
}

export default Cell;
