import React from "react";
import Timeline  from "./Timelines.js";

  function TimelineDemo() {
  const data = [
    {
      title: " Crypto Health ",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
Stay informed with live health status insights of top cryptocurrencies. Our platform analyzes critical metrics to categorize each coin as Good, Neutral, or Risky, helping users quickly assess market conditions. Whether you're tracking Bitcoin, Ethereum, or any trending token, you get a clear and real-time view of its performance and risk level — empowering smarter and safer investment decisions.          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/0*KNzX0C6OJjtLIDfT"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://cdn.mos.cms.futurecdn.net/sozCCXu33igVZ67sK5Wr2K.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://d3i2s57s2jetfw.cloudfront.net/wp-content/uploads/2025/05/f367e558e69b9db161276bb386b3ff05-1200x0-c-default.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://investorplace.com/wp-content/uploads/2021/07/cryptos-2.jpg"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },



    
    {
      title: "Convert Any Crypto Instantly",
      content: (
        <div>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Seamlessly convert the value of any cryptocurrency in real time with our smart conversion tool. Whether you're switching between Bitcoin, Ethereum, or lesser-known tokens, you’ll get instant and accurate price data. 
          </p>
          <p
            className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
           Our platform ensures smooth, fast, and reliable conversions based on live market rates — helping you make quick and confident financial moves.t.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/premium-vector/cryptocurrency-converter-flat-illustration_389832-146.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://storage.cryptomus.com/commercial/converter.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://appindianews.com/wp-content/uploads/2019/07/cryptocurrency-appindianews-740x357.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fwww.pwmnet.com%2Fwp-content%2Fuploads%2F2024%2F03%2FGET-bitcoin-web-scaled.jpg?source=pwm-specialist-wp&width=600&height=400&quality=highest&fit=cover"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },






    {
      title: "Real-Time Crypto Risers & Fallers",
      content: (
        <div>
          <p
            className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
Stay updated with the live market pulse by tracking the top 15 performing and underperforming cryptocurrencies.           </p>
          <div className="mb-8">
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Live Top 15 Crypto Gainers List
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Real-Time Market Losers Feed
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Instant Price Movement Updates
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Auto-refreshing Leaderboard View
            </div>
            <div
              className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅  Smarter Investment Decisions with Trend Insights
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.shutterstock.com/image-photo/ethereum-eth-cryptocurrency-coin-front-600nw-1933394666.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://images.cnbctv18.com/uploads/2021/05/Ether-e1647957866195-1019x573.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://www.cryptotimes.io/wp-content/uploads/2025/04/Top-5-loser-cryptocurrencies-amid-market-turmoil.jpg"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=320,h=200,q=80/https://builtin.com/sites/www.builtin.com/files/2023-02/fire-cryptocurrency-what-does-burning-crypto-mean.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },


    






  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
export default TimelineDemo;