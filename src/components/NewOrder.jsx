import React from "react";
import "./NewOrder.css";
import FormRow from "./FormRow";

const options = [
  { id: 1, value: "Peperoni", sizeable: true, extras: true },
  { id: 2, value: "Especial", sizeable: true, extras: true },
  { id: 3, value: "Carnes frias", sizeable: true, extras: true },
  { id: 4, value: "Coca cola 600ml", sizeable: false, extras: false },
];
const NewOrder = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="" onSubmit={() => handleSubmit}>
      <p className="text-end"></p>
      <FormRow products={options}></FormRow>
      <p className="text-center">
        <button type="button" className="btn btn-add mt-3">
          +
        </button>
      </p>
      <p className="text-end mx-5">
        <button type="submit" className="btn btn-orange text-white">
          Continuar
        </button>
      </p>
    </form>
  );
};

export default NewOrder;
