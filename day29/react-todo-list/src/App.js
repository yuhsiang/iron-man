import React, { Component } from 'react';

import NavHeader from './container/NavHeader';
import AppContainer from './container/AppContainer';

class App extends Component {
  render() {
    return (
      <>
        <NavHeader />
        <AppContainer />
      </>
    );
  }
}

export default App;
