import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddRoom extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    addres:"",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone ,addres} = this.state;

    // Verificar campos
    if (name.trim() === "") {
      this.setState({ errors: { name: "Nombre requerido" } });
      return;
    }
    if (email.trim() === "") {
      this.setState({ errors: { email: "Email requerido" } });
      return;
    }
    if (phone.trim() === "") {
      this.setState({ errors: { phone: "Teléfono requerido" } });
      return;
    }

    const nuevoContacto = {
      name,
      email,
      phone,
      addres
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      nuevoContacto
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: res.data
    });

    this.setState({
      name: "",
      email: "",
      phone: "",
      addres:"",
      errors: {}
    });

    this.props.history.push("/rooms");
  };

  render() {
    const { name, email, phone, addres, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Agregar Habitación</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup
                    name="name"
                    label="Nombre"
                    placeholder="Nombre del Hotel"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                <TextInputGroup
                    name="addres"
                    label="Ciudad"
                    placeholder="Ciudad"
                     value={addres.city}
                    onChange={this.onChange}
                    error={errors.name}
                  />
               
                  <TextInputGroup
                    name="email"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Teléfono"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-block btn-light"
                    value="Agregar Habitacion"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
