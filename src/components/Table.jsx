import React, { useState } from "react";
import "./Table.css";

const Table = (props) => {
  const [data, setData] = useState(props.data);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DESC");
    }
    if (order === "DESC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <>
      <p className="table-title">Ordenes activas</p>
      <table className="table">
        <thead className="header">
          <tr>
            {props.headers.map((row, index) => {
              return (
                <td
                  key={index}
                  onClick={() => sorting(row.sortName)}
                  scope="col"
                >
                  {row.header}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            return (
              <tr
                onClick={() => console.log(row)}
                key={row.id}
                className="filas"
              >
                <th scope="row">{row.id}</th>
                <td>{row.type}</td>
                <td>{row.state}</td>
                <td>{row.client}</td>
                <td>{row.table}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
