import React from 'react';
import GreetingContainer from './greeting/greeting_container';

function App({ children }) {
  return(
    <div>
      <GreetingContainer />
      {children}
    </div>
  );
}


export default App;
