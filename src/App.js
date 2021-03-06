import "./App.css";
import Quote from "./components/Quote";
import NoQuote from "./components/NoQuote";
import React, { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    getQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomBg = () => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    setColor(color);
    return color;
  };

  const getQuote = async () => {
    const response = await fetch(
      `https://quotes.stormconsultancy.co.uk/random.json`
    );
    const data = await response.json();
    setData(data);
    document.body.style.background = randomBg();
  };

  if (data) {
    return <Quote color={color} data={data} getQuote={getQuote} />;
  }
  return <NoQuote color={color} data={data} getQuote={getQuote} />;
}
