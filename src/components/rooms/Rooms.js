import React, { Component } from "react";
import Room from "./Room";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";

export default class Rooms extends Component {
  render() {
    return (
      <Consumer>
      
        {value => {
          const { contactos } = value;
          return (

            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-success">Habitaciones Disponiblbles</span>
              </h1>
              <React.Fragment>
        <Link to="/AddRoom" className="text-primary">
                <i className="fas fa-plus" /> Agregar nueva habitación
              </Link>
        </React.Fragment>
              {contactos.map(contacto => (
                <Room key={contacto.id} contacto={contacto} />
              ))}
             
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}