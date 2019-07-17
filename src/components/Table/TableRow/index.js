import React from "react";

import TableButton from "../TableButton/";

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
        <TableButton color="btn-danger" content="Delete" />
      </td>
    </tr>
  );
};

export default TableRow;
