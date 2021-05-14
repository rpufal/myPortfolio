import React from 'react';
import Projects from './Projects';
import Header from '../components/Header';
import About from './About';
import Skills from './Skills';
import Footer from '../components/Footer';
import Title from './Title';

const Home = () => (
  <div>
    <Header />
    <Title />
    <About />
    <Skills />
    <Projects />
    <Footer />
  </div>
);

export default Home;
