import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="bar">
        <div className="avatar">
          <img className="circle" src="./../../user-solid.png" alt="" />
          <p className="red">admin</p>
        </div>
      </div>
      <nav>
        <ul>
          <li className="logo">
            <Link to="/pos/home">
              <p className="text-center">
                <img
                  className="img-fluid logo-img"
                  src="../../logowbg.png"
                ></img>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/pos/home">
              <p className="item">Inicio</p>
            </Link>
          </li>
          <li>
            <Link to="/pos/order">
              <p className="item">Nueva orden</p>
            </Link>
          </li>
          <li>
            <Link to="/pos/administration">
              <p className="item">Administración</p>
            </Link>
          </li>
          <li>
            <Link to="/pos/cashBox">
              <p className="item">Corte/Abrir caja</p>
            </Link>
          </li>
          <li>
            <Link to="/pos/products">
              <p className="item">Productos</p>
            </Link>
          </li>
          <li>
            <Link to="/pos/sales">
              <p className="item">Ventas</p>
            </Link>
          </li>
          <li>
            <p className="item-colapsar mt-5">Cerrar sesion</p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
