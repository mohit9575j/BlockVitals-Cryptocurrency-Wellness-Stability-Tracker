import react from 'react';
import Detailedashboard from '../Detailedinformation.js'
import VortexDemo from '../Vortex-demo.js';


function DetailedinfoPage(){
    return (
        <>

        <div>
            <VortexDemo />
        </div>
            <div className="bg-slate-900">
                <Detailedashboard />
            </div>
        </>
    );
}

export default DetailedinfoPage;