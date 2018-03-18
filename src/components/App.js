import React from 'react';
import '../assets/scss/main.scss';
import Conditional from './conditional-rendering/Conditional';
import Provider from './provider/Provider';
import Consumer from './provider/Consumer';



class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Conditional condition/>

        <h1>Provider template (React context)</h1>
        <Provider>
          <Consumer/>
        </Provider>
      </div>
    )
  }
}

export default App;
