import React from "react";

import TableButton from "../TableButton/";

const deleteMember = props => {
  props.deleteMem(`members/${props.data.id}`);
};

const TableRow = props => {
  return (
    <tr>
      <td>{props.count}</td>
      <td>{props.data.name}</td>
      <td>{props.data.address}</td>
      <td>{props.data.phone}</td>
      <td>{props.data.DOB}</td>
      <td>{props.data.createAt}</td>
      <td>
        <TableButton
          color="btn-warning"
          content="Edit"
          pathName={`/EditMember/${props.data.id}`}
          id={props.data.id}
        />
        &nbsp; &nbsp;
        <button
          className="btn btn-large btn-danger"
          onClick={() => deleteMember(props)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
