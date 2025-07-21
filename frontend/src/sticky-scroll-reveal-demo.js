"use client";
import React from "react";
import  StickyScroll  from "./sticky-scroll-reveal.js";


const content = [
  {
    title: "Real-Time Collaboration",
    description:
      "Stay connected with your team or community while tracking and analyzing cryptocurrencies. Share insights, discuss trends, and make quick decisions together using our live data and interactive charts. Our platform enables seamless teamwork to maximize productivity and informed decision-making in the fast-paced crypto market.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      Real-Time Collaboration
      </div>
    ),
  },
  {
    title: "Accurate Data Synchronization",
    description:
      "We guarantee you’re always viewing the latest and most accurate data. No delays, no outdated info—just seamless synchronization across all your devices and sessions. Focus on making smart decisions backed by up-to-the-minute insights.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
      Accurate Data Synchronization
      </div>        
    ),
  },
  {
    title: "Never Miss a Beat",
    description:
      "With continuous data streaming, you’ll never run out of fresh information. Whether it’s live news, price charts, or coin performance, our platform keeps you in the loop so you can react swiftly and stay ahead in the crypto game.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
       Never Miss a Beat
      </div>
    ),
  },
  {
    title: "Never Run Out of Crypto Insights",
    description:
      "Our platform continuously streams the latest market data, news, and trends so you’re never left in the dark. With up-to-date information always available, you can confidently track cryptocurrencies, analyze performance, and make informed decisions without worrying about missing out on any crucial update.",
    content: (
      <div
        className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
     Never Run Out of Crypto Insights
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  );
}

export default StickyScrollRevealDemo;