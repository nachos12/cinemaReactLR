import './App.css';
import React from "react";
import { Fragment } from "react/cjs/react.development";
import { Routing } from "./Routing";

export class App extends React.Component {
  
  render() {
    return (
      <Fragment>
        <h1> CiNemA ! </h1>
        <Routing />
      </Fragment>
    );
  }
}

// 4. Export de ma classe
export default App;

