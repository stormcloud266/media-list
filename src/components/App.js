import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import '../styles/app.css';


class App extends Component {

  render() {
    return (
        <div className='app'>
          <List />
          <Form/>
        </div>
    );
  }
}

export default App;
