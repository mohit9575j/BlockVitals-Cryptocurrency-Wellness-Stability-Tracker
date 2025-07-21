"use client";

import React from "react";
import  WobbleCard  from "./wobble-card.js";

 function WobbleCardDemo() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            You Can See Health of Every Crypto
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
           Track the real-time health and performance of any cryptocurrency with detailed metrics and market data, helping you make informed investment decisions.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
       You Can See Last 24hr Stable Coins
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
       Monitor the most stable coins over the past 24 hours, giving you insights into low-volatility assets and safer investment options.
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           You Can Convert Any Crypto Coin Price
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
         Easily convert prices between any cryptocurrencies with precise and real-time exchange rates. Our platform ensures fast and seamless conversions, so you can manage your crypto assets without delays. Stay confident knowing you always get accurate pricing for every transaction.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
    </div>
  );
}

export default WobbleCardDemo;