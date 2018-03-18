import React from 'react';
import '../assets/scss/main.scss';
import Conditional from './conditional-rendering/Conditional';
import Provider from './provider/Provider';
import Wrapper from './provider/Wrapper';
import Consumer from './provider/Consumer';
import withProps from './decorator/withProps';
import Details from './decorator/Details';
import CursorPosition from './render-props/CursorPosition';
import PositionView from './render-props/PositionView';

class App extends React.Component {
  render() {
    const ModifiedDetails = withProps({name: 'John'})(Details);
    return (
      <div className="main">
        <Conditional condition/>

        <h1>Provider template (React context)</h1>
        <Provider>
          <Wrapper>
            <Consumer/>
          </Wrapper>
        </Provider>

        <h1>Decorator template (High Order Component, HOC)</h1>
        <ModifiedDetails
          title="I'm here to stay"
          language="JavaScript"/>

        <h1>Render props (function as child)</h1>
        <CursorPosition>
          {position => <PositionView position={position}/>}
        </CursorPosition>
      </div>
    )
  }
}

export default App;
