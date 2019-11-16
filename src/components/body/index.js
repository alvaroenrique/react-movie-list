import React, { useState } from "react";
import TableField from "./components/table-field";
import Modal from "./components/modal";

function Body() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      name: "Json bourne",
      publishDate: "2016-08-15",
      state: "active"
    }
  ]);

  const [modalData, setModalData] = useState({});

  const closeModal = () => {
    setIsModalOpen(false);
    setModalData({});
  };

  return (
    <>
      <div className="flex-1 p-5">
        <div className="flex justify-between pb-5">
          <h1 className="text-2xl">Películas</h1>
          <button
            type="button"
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={() => setIsModalOpen(true)}
          >
            Nueva película
          </button>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">F. Publicación</th>
              <th className="px-4 py-2">Estado</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {data.map(fieldData => (
              <TableField
                editMovie={() => {
                  setIsModalOpen(true);
                  setModalData(fieldData);
                }}
                deleteMovie={() => {
                  setData(data.filter(movie => movie.id !== fieldData.id));
                }}
                {...fieldData}
                key={fieldData.id}
              />
            ))}
          </tbody>
        </table>
      </div>
      {isModalOpen && (
        <Modal
          close={() => {
            closeModal();
          }}
          {...modalData}
          createMovie={elem => {
            if (!elem.id) {
              const auxElem = elem;
              auxElem.id = data[0]
                ? data.reduce((prev, current) =>
                    prev.id > current.id ? prev : current
                  ).id + 1
                : 1;
              setData([...data, auxElem]);
            } else {
              setData(
                data.map(movie => {
                  if (movie.id === elem.id) {
                    return elem;
                  }
                  return movie;
                })
              );
            }
            closeModal();
          }}
        />
      )}
    </>
  );
}

export default Body;
