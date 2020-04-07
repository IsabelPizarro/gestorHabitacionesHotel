import React, { Component } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

export default class Contacts extends Component {
  render() {
    return (
      <Consumer>
      
        {value => {
          const { contactos } = value;
          return (

            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-success">Usuarios</span>
              </h1>
        
              {contactos.map(contacto => (
                <Contact key={contacto.id} contacto={contacto} />
              ))}
                   <React.Fragment>
        <Link to="/contact/add" className="text-primary">
                <i className="fas fa-plus" /> <span class="badge badge-pill badge-primary">Agregar nuevo usuario</span>
              </Link>
        </React.Fragment>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
