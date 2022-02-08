import React from "react";
import Cell from "./Cell";

function Row({ user, header }) {
  return header ? (
    <th>header</th>
  ) : (
    <tr>
      <Cell user={user} />
    </tr>
  );
}

export default Row;
