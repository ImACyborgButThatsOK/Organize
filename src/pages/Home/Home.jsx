import React from 'react';
import Intro from '../../Components/Intro/Intro';
import IntroTask from '../../Components/IntroTask/IntroTask';
import IntroBook from '../../Components/IntroBook/IntroBook';
import IntroMusic from '../../Components/IntroMusic/IntroMusic';
import Footer from '../../Components/Footer/Footer';
// import Navbar from '../../Components/Navbar/Navbar';

function Home() {
  return (
    <div>
      <Intro />
      <IntroTask />
      <IntroBook />
      <IntroMusic />
      <Footer />
    </div>
  );
}

export default Home;
