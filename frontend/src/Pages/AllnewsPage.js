import react from 'react';
import VortexDemo from '../Vortex-demo.js';
import Allnews from '../Allnews.js';
 import Wobbledemo from '../wobbledemo.js';
 

function CryptoPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div>
            <VortexDemo />
        </div>
        
 <div className="bg-black ">
  <Allnews/>
</div>
  
 <div className="bg-black my-10">
     <Wobbledemo/>
</div>

        </div>
    );

}
export default CryptoPage