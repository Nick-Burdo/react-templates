import React from 'react';
import '../assets/scss/main.scss';
import Conditional from './conditional-rendering/Conditional';


class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Conditional condition/>
      </div>
    )
  }
}

export default App;
