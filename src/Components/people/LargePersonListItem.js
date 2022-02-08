import React, { useContext } from "react";
import { AppContext } from "../../App";

function LargePersonListItem(props) {
  const { users } = useContext(AppContext);

  console.log(users);
  return <div>{users}</div>;
}

export default LargePersonListItem;
