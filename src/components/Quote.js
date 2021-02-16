import React from "react";

export default function Quote(props) {
  const { data, color, getQuote } = props;
  return (
    <section id="wrapper">
      <div id="quote-box">
        <span id="text" style={{ color: color }}>
          {data.quote}
        </span>
        <span id="author" style={{ color: color }}>
          - {data.author}
        </span>
        <button
          id="new-quote"
          onClick={getQuote}
          style={{ backgroundColor: color }}
        >
          New quote
        </button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          tweet
        </a>
      </div>
      <footer>
        <span>by lpiedrahita</span>
      </footer>
    </section>
  );
}
