import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mailmap from "./components/mail_map/Mailmap";

class App extends React.Component {


  render() {
    return (
        <div>
          <Mailmap/>
        </div>
    );
  }
}

export default App;
