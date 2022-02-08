import React from "react";
import Cell from "./Cell";

function Row({ user, header }) {
  return header ? (
    <thead>
      <tr>
        <tr>Header</tr>
      </tr>
    </thead>
  ) : (
    <tbody>
      <tr>
        <Cell user={user} />
      </tr>
    </tbody>
  );
}

export default Row;
