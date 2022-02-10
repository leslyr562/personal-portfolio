import React from 'react';
import Header from './components/Header/index';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project'
import ContactForm from './components/Contact'
import Footer from './components/Footer';



function App() {


  return (
    <div>
    <Header> </Header>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </div>
  );
}

export default App;