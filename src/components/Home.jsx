import React from "react";
import "./Home.css";
import Table from "./Table";

const mockData = [
  {
    id: 1,
    type: "domicilio",
    state: "pendiente",
    client: "Roy",
    table: "-",
  },
  {
    id: 2,
    type: "mostrador",
    state: "en preparación",
    client: "Ivan",
    table: "-",
  },
  {
    id: 3,
    type: "domicilio",
    state: "enviada",
    client: "Cochi",
    table: "-",
  },
  {
    id: 4,
    type: "local",
    state: "entregada",
    client: "Alda",
    table: "5",
  },
];

const mockDataBestSellers = [
  "Peperoni",
  "Especial",
  "Carnes Frias",
  "Vegetariana",
  "Hawaiana",
];

const mockDataDelivery = [
  {
    name: "Rodrigo",
    ordersDelivered: 3,
  },
  {
    name: "Felipe",
    ordersDelivered: 10,
  },
  {
    name: "Ben",
    ordersDelivered: 2,
  },
];

const headersOrders = [
  { sortName: "id", header: "#" },
  { sortName: "type", header: "Tipo" },
  { sortName: "state", header: "Estado" },
  { sortName: "client", header: "Cliente" },
  { sortName: "table", header: "Mesa" },
];

const Home = () => {
  return (
    <>
      <Table data={mockData} headers={headersOrders} />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <ul className="list-group list-group-numbered list-group-flush">
                  {mockDataBestSellers.map((obj) => {
                    return (
                      <li key={obj} className="list-group-item">
                        {obj}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <p className="text-center">
                  <img src="./../../pizza.png" alt="" />
                </p>
                <p className="text-center fs-2">18</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <table className="table table-borderless">
                  <thead>
                    <tr className="text-white">
                      <th className="text-start" scope="col">
                        Repartidor
                      </th>
                      <th scope="col">pedidos entregados</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockDataDelivery.map((obj) => {
                      return (
                        <tr key={obj.name}>
                          <th scope="row" className="text-start text-white">
                            {obj.name}
                          </th>
                          <td className="text-center text-white">
                            {obj.ordersDelivered}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
