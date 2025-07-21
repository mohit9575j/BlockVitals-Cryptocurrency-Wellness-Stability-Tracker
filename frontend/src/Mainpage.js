// HomePage.js
import React from 'react';
import Dashboard from './Dashboard.js';
import CryptoConverter from './CryptoConverter.js';
import TopGainersLosers from './Gainer.js';
import Historical from './Historical.js';
import Stable from './Stable.js';
import CryptoNewsDashboard from './CryptoNewsDashboard.js';
import Hero from './Hero.js';  
import VortexDemo from './Vortex-demo.js';
import StickyScroll from './sticky-scroll-reveal-demo.js';
import Timelinedemo from './Timelinedemo.js';
import TextDemo from './Textdemo.js';  
import Wobbledemo from './wobbledemo.js';     
 
function Homepage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
   


     <div className=" bg-black">
  <Hero />  
</div>



<div className="bg-slate-900" style={{ padding: '50px 200px' }}>
 <TextDemo/>
</div>

<div className="bg-slate-900">
  <Dashboard />
</div>
      <div>
         <VortexDemo/>
      </div>
<div className="bg-black">
  <CryptoConverter />
</div>

     <StickyScroll/>
      <Timelinedemo/>
   

<div className="bg-slate-900 ">
  <TopGainersLosers />
</div>

<div className="bg-black">
  <Historical />
</div>

<div className="bg-black ">
  <Stable />
</div>

<div className="bg-slate-900">
  <CryptoNewsDashboard />
</div>

 <div className="bg-black my-10">
     <Wobbledemo/>
</div>
    

    </div>
  );
}

export default Homepage;
