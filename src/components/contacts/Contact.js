import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  state = {
    showContactInfo: false
  };

  static defaultProps = {
    contacto: {
      name: "Nombre",
      email: "nombre@ejemplo.com",
      phone: "1234 5678"
    }
  };

  static propTypes = {
    contacto: PropTypes.object
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (e) {
    } finally {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contacto;

    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.onShowClick}
                  className="fas fa-caret-down"
                />
                <i
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fas fa-times"
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "blue",
                      marginRight: "1rem"
                    }}
                    className="fas fa-pencil-alt"
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Teléfono: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
