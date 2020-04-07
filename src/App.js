import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import AddRoom from "./components/rooms/AddRoom";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import Users from "./components/pages/Users";
import NotFound from "./components/pages/NotFound";
import WelcomeAdm from "./components/pages/WelcomeAdm";
import Rooms from "./components/rooms/Rooms";
import Bills from "./components/pages/Bills";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header titulo="Aministrador" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/bills" component={Bills} />
                <Route exact path="/rooms" component={Rooms}/>
                <Route exact path="/AddRoom" component={AddRoom}/>
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/welcome" component={WelcomeAdm} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
