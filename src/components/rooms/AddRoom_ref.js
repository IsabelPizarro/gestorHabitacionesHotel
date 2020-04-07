import React, { Component } from "react";

export default class AddRoom extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.telInput = React.createRef();
  }

  onSubmit = e => {
    e.preventDefault();
    const contacto = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      tel: this.telInput.current.value
    };

    console.log(contacto);
  };

  static defaultProps = {
    nombre: "Yael",
    email: "y@a.com",
    tel: "123123123"
  };

  render() {
    const { nombre, email, tel } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Agregar contacto</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                name="nombre"
                type="text"
                className="form-control form-control-lg"
                placeholder="Ingrese nombre"
                defaultValue={nombre}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                className="form-control form-control-lg"
                placeholder="Ingrese email"
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="tel">Teléfono</label>
              <input
                name="tel"
                type="phone"
                className="form-control form-control-lg"
                placeholder="Ingrese teléfono"
                defaultValue={tel}
                ref={this.telInput}
              />
            </div>
            <input
              type="submit"
              className="btn btn-block btn-light"
              value="Agregar Contacto"
            />
          </form>
        </div>
      </div>
    );
  }
}
