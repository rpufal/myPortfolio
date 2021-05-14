import React from 'react';
import Projects from './Projects';
import Header from '../components/Header';
import About from './About';
import Skills from './Skills';
import Footer from '../components/Footer';
import Title from './Title';
import ProjectsSecond from './ProjectsSecond';

const Home = () => (
  <div>
    <Header />
    <Title />
    <About />
    <Skills />
    {/* <Projects /> */}
    <ProjectsSecond />
    <Footer />
  </div>
);

export default Home;
