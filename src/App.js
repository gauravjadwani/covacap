import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
// import Header from './components/Header';
// import Table from './components/Table';

class App extends Component {
      constructor (props) {
         super(props);
       }
  render() {
      console.log('App');
    return (
      <div>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
