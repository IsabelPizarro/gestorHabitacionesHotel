import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

export default class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

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
      phone
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
      errors: {}
    });

    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Agregar contacto</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup
                    name="name"
                    label="Nombre"
                    placeholder="Ingrese nombre"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    name="email"
                    label="Email"
                    placeholder="Ingrese email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    name="phone"
                    label="Teléfono"
                    placeholder="Ingrese teléfono"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />
                  <input
                    type="submit"
                    className="btn btn-block btn-light"
                    value="Agregar Contacto"
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
