import React from 'react';
import Navigator from './components/Navigator'
import Portfolio from './components/Project';
import ContactForm from './components/Contact'


function App() {

  return (
    <div>
       <Navigator></Navigator>
      <main>
      <ContactForm></ContactForm>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;