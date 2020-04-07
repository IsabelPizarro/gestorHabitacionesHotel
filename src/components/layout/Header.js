import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  const { titulo } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark mb-3 bg-success py-0">
      <div className="container">
        <Link to="/welcome">
         <h1 className="navbar-brand">{titulo}</h1> 
        
        </Link>

        <div>
          <ul className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to="/" className="nav-link" usuario="usuario">
                <i className="fas fa-users" /> Usuarios
              </Link>
          </li>


            <li className="nav-item">
              <Link to="/rooms" className="nav-link">
                <i className="fas fa-home" /> Habitaciones
              </Link>
            </li>
            
           <li className="nav-item">
              <Link to="/users" className="nav-link">
                <i className="fas fa-book" /> Reservas
              </Link>
          </li>

           <li className="nav-item">
              <Link to="/bills" className="nav-link">
                <i className="fas fa-bill" /> Facturas
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  titulo: "My App"
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
};

export default Header;
