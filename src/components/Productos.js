import React from "react";

export const Productos = () => {
  return (
    <>
      <h2 className="text-center my-5">Listado de productos</h2>
      <table className="table table-striped">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Precio</th>
          <th scope="col">Acciones</th>
        </tr>
      </table>
    </>
  )
};
