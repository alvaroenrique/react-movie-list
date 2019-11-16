import React from "react";

import { ReactComponent as EditIcon } from "../../../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../icons/delete.svg";

function TableField({ editMovie, deleteMovie, id, name, publishDate, state }) {
  return (
    <tr>
      <td className="border px-4 py-2">{id}</td>
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">{publishDate}</td>
      <td className="border px-4 py-2">
        {state === "active" ? "Activo" : "Inactive"}
      </td>
      <td className="border px-4 py-2">
        <button className="mr-2" onClick={() => editMovie()}>
          <EditIcon />
        </button>
        <button onClick={() => deleteMovie()}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default TableField;
