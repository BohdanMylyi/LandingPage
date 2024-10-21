import React from 'react';
import './styles';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
      </main>
    </div>
  );
};

export default App;
