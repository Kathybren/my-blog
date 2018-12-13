import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Router from './router/index'

class App extends Component {
  render() {
    console.log(process.env.NODE_ENV)
    console.log(process.env.REACT_APP_API)
    console.log(process.env.NODE_ENV)
    console.log(process.env.NODE_ENV)
    return (
      <Provider store={store}>
        <div>
          <Router/>
        </div>
      </Provider>
    );
  }
}

export default App;
