import React from "react";

import { Link } from "react-router-dom";

const TableButton = props => {
  return (
    <Link
      to={{
        pathname: `${props.pathName}`,
        state: props.id
      }}
    >
      <button type="button" className={`btn btn-large ${props.color}`}>
        {props.content}
      </button>
    </Link>
  );
};

export default TableButton;
