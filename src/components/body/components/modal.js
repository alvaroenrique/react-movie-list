import React, { useEffect, useState } from "react";

import { ReactComponent as DeleteIcon } from "../../../icons/close.svg";

function Modal({
  close,
  id,
  name = "",
  publishDate = "",
  state = "",
  createMovie
}) {
  const [nameField, setNameField] = useState(name);
  const [dateField, setDateField] = useState(publishDate);
  const [stateField, setStateField] = useState(state);

  const [nameWarning, setNameWarning] = useState("");
  const [dateFieldWarning, setDateFieldWarning] = useState("");
  const [stateFieldWarning, setStateFieldWarning] = useState("");

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleNameField = e => {
    setNameField(e.target.value);
  };

  const handleDateField = e => {
    setDateField(e.target.value);
  };

  const handleStateField = e => {
    setStateField(e.target.value);
  };

  const saveData = e => {
    e.preventDefault();
    if (!nameField) {
      setNameWarning("Este campo es obligatorio");
    } else if (!dateField) {
      setDateFieldWarning("Este campo es obligatorio");
    } else if (!stateField) {
      setStateFieldWarning("Este campo es obligatorio");
    } else {
      createMovie({
        name: nameField,
        publishDate: dateField,
        state: stateField,
        id
      });
    }
  };

  return (
    <div className="gradient flex justify-center items-center">
      <div className="modal-body shadow-md rounded p-10 relative">
        <button
          className="absolute close-button"
          onClick={() => {
            close();
          }}
        >
          <DeleteIcon></DeleteIcon>
        </button>
        <h1 className="text-2xl mb-5">{`${
          id ? "Editar" : "Nueva"
        } Película`}</h1>
        <form onSubmit={e => saveData(e)}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Nombre de película:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={nameField}
              onChange={e => handleNameField(e)}
            />
            <p className="text-red-500 text-xs italic">{nameWarning}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Fecha de publicación:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="date"
              value={dateField}
              onChange={e => handleDateField(e)}
            />
            <p className="text-red-500 text-xs italic">{dateFieldWarning}</p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Estado:</label>
            <select
              onChange={e => handleStateField(e)}
              value={stateField}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option disabled defaultValue value="">
                Seleccion Estado
              </option>
              <option value="active">Activo</option>
              <option value="inactive">Inactivo</option>
            </select>
            <p className="text-red-500 text-xs italic">{stateFieldWarning}</p>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
