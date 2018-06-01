import React, { Component } from 'react';
import MainRouter from './components/MainRouter';

class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MainRouter />;
  }
}
export default Root;
