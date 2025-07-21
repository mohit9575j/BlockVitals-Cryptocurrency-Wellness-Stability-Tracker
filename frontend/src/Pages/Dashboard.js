import react from 'react';
import VortexDemo from '../Vortex-demo.js';
import Dashboard from '../Dashboard.js';
import Wobbledemo from '../wobbledemo.js';

function Dashboardpage() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <div>
            <VortexDemo />
        </div>
         
        <div className="bg-slate-900">
            <Dashboard />
        </div>
          
 <div className="bg-black my-10">
     <Wobbledemo/>
</div>

        </div>
    );

}
export default Dashboardpage;