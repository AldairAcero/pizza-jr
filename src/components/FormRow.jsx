import React from "react";
import "./../components/FormRow.css";
import { useState } from "react";

const FormRow = (props) => {
  const [extra, setExtra] = useState(false);
  const [product, setProduct] = useState({
    productId: props.products[0].id,
    productName: props.products[0].value,
    sizeable: props.products[0].sizeable,
    extras: props.products[0].extras,
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <select
              className="form-select form-select-sm"
              id=""
              aria-label="Floating label select example"
              onChange={(e) => {
                setProduct({
                  productId: e.target.value,
                  productName:
                    e.target.options[e.target.options.selectedIndex].label,
                  sizeable: props.products[e.target.value - 1].sizeable,
                  extras: props.products[e.target.value - 1].extras,
                });
              }}
            >
              {props.products.map((product, index) => {
                return (
                  <option label={product.value} key={index} value={product.id}>
                    {product.value}
                  </option>
                );
              })}
            </select>
          </div>
          {product.sizeable && (
            <div className="col-2">
              <select className="form-select form-select-sm" name="" id="">
                <option disabled value className="text-center"></option>
                <option value="s">Chica</option>
                <option value="m">Mediana</option>
                <option value="g">Grande</option>
              </select>
            </div>
          )}
          <div className="col-1">
            <input
              className="input-group input-group-sm text-center"
              placeholder="cant."
              type="number"
              min="1"
              name=""
              id=""
              defaultValue={1}
            />
          </div>
          <div className="col-3">
            <input
              className="text-center input-group input-group-sm"
              type="text"
              placeholder="Notas"
            />
          </div>
          {product.extras && (
            <div className="col-3">
              <div className="d-flex">
                <div className="form-check m-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="formCheckDefault"
                    onChange={() => setExtra(!extra)}
                  />
                  <label
                    className="form-check-label fs-6"
                    htmlFor="formCheckDefault"
                  >
                    ¿Extra?
                  </label>
                </div>

                <select
                  className="form-select form-select-sm"
                  name=""
                  id=""
                  defaultValue
                  disabled={!extra}
                >
                  <option disabled value>
                    extras
                  </option>
                  <option value="extra">extra 1</option>
                  <option value="extra">extra 2</option>
                  <option value="extra">extra 3</option>
                </select>
              </div>
            </div>
          )}

          <div className="col-1">
            <button
              onClick={() => console.log(product)}
              type="button"
              className="btn btn-danger"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRow;
