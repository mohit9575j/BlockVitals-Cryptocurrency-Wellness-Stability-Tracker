"use client"
import  TextGenerateEffect  from "./text-generate-effect.js"

const words = `  Our platform offers a comprehensive suite of features designed to give users real-time insights into the cryptocurrency market. From tracking live coin performance and analyzing the top gainers, losers, and stable coins, to staying updated with the latest crypto news — everything is seamlessly integrated into one powerful dashboard. Users can effortlessly convert between different cryptocurrencies and view detailed historical charts with zoom capabilities, allowing them to interpret trends over various timeframes like 1 day, 7 days, or even a year. The application ensures accurate and timely data for informed decision-making, offering a seamless experience for both beginners and crypto enthusiasts.
`

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />
}

