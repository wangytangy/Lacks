import React from 'react';
import GreetingContainer from './greeting/greeting_container';

function App({ children }) {
  return(
    <div>
      <h1>Lacks</h1>
      <GreetingContainer />
      {children}
    </div>
  );
}


export default App;
