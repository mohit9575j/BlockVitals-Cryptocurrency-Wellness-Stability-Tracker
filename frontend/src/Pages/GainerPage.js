import react from 'react';
import VortexDemo from '../Vortex-demo.js';
import Wobbledemo from '../wobbledemo.js';
import TopGainersLosers from '../Gainer.js';

function CryptoPage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div>
            <VortexDemo />
        </div>
         
  <div className="bg-slate-900 ">
  <TopGainersLosers />
</div>

          
 <div className="bg-black my-10">
     <Wobbledemo/>
</div>

        </div>
    );

}
export default CryptoPage