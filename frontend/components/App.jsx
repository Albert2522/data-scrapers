import React from 'react';

const App = ({ children }) => (
  <div>
    <header>
        <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
