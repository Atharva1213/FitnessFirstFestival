import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/About';
import Announcement from './components/Announcement';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
// import EventCorousel from './components/EventCorousel';
import Numbers from './components/Numbers';
import EventPlanned from './components/EventPlanned';
import TaskForce from './components/Taskforce';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import DevelopedBy from './components/DevelopedBy/DevelopedBy';
import LandscapeModeOverlay from './components/LandscapeModeOverlay';


function App() {

  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia('(orientation: portrait)').matches);
    };

    handleOrientationChange(); // Initial check
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className='relative'>
     
      <Banner />
      <About />
      <Numbers />
      <TaskForce />
      <Timeline />
      <EventPlanned />
      <Gallery />
      <DevelopedBy/>
      <Footer/>
      {/* <EventCorousel/> */}
      <Announcement />
      <LandscapeModeOverlay show={isLandscape} />
    </div>

  );
}

export default App;
