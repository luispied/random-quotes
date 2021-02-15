import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://quotes.rest/quote/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <section id="wrapper">
      <div id="quote-box">
        <i class="fa fa-quote-left"></i>
        <span id="text">Text</span>
        <span id="author">Author</span>
        <button id="new-quote">New quote</button>
      </div>
      <footer>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          by someone
        </a>
      </footer>
    </section>
  );
}

export default App;
