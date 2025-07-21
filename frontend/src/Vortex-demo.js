import React from "react";
import { Vortex } from "./Vortex.js";

 function VortexDemo() {
  return (
    <div
      className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
     Why Choose Our Platform
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
         Cryptocurrency markets are volatile and can be unpredictable.Our platform &apos;provides you with reliable data and tools to make&apos;well-informed decisions and minimize risks.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          
         </div>
      </Vortex>
    </div>
  ); 
}
export default VortexDemo;