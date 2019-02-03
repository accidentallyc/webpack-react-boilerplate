import _ from 'lodash';
import './index.scss';

import React, { Component } from "react";
import ReactDOM from "react-dom";


class HelloWorldComponent extends Component {
  constructor() {
    super();
    this.state = {
      title: "Wepback-React Boilerplate"
    };
  }
  render() {
    return (
      <div>
      	Hello {this.state.title}!!!
      </div>
    );
  }
}

ReactDOM.render(<HelloWorldComponent />, document.getElementById("app-container"));