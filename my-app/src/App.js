import React from 'react';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;
