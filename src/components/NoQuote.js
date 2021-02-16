import React from "react";

export default function NoQuote(props) {
  const { color, getQuote } = props;
  return (
    <section id="wrapper">
      <div id="quote-box">
        <span id="text" style={{ color: color }}>
          No quote 😣
        </span>
        <button
          id="new-quote"
          onClick={getQuote}
          style={{ backgroundColor: color }}
        >
          New quote
        </button>
      </div>
      <footer>
        <span>by lpiedrahita</span>
      </footer>
    </section>
  );
}
