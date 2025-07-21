import react from 'react';
import VortexDemo from '../Vortex-demo.js';
import CryptoConverter from '../CryptoConverter.js';
import Wobbledemo from '../wobbledemo.js';

function CryptoPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div>
            <VortexDemo />
        </div>
         
       <div className="bg-black my-15 ">
  <CryptoConverter />
</div>
          
 <div className="bg-black my-10">
     <Wobbledemo/>
</div>

        </div>
    );

}
export default CryptoPage