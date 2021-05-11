import React from 'react';
import Image from 'next/image';

const Home = () => (
  <div>
    <Image src="/public/home.png" alt="home" width={ 500 } height={ 500 } />
    <img src="/public/home.png" alt="home" />
  </div>
);

export default Home;
