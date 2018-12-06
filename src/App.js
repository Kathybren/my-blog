import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Header from './components/header'
import Router from './router/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <Router/>
        </div>
      </Provider>
    );
  }
}

export default App;
