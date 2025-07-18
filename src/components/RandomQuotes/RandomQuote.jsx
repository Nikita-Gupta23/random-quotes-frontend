import React, { useState, useEffect} from 'react'
import './RandomQuote.css'

const RandomQuote = () => {

    const [quote, setQuote] = useState({
        quote: "Where there is a will, there is a way",
        author: "Anonymous"
    });

     const fetchQuote = async () => {
    try {
      const response = await fetch("https://random-quotes-backend2.onrender.com/api/quotes/random/");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  
  const share = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`);
  };

      useEffect(() => {
    fetchQuote(); // Load a random quote initially
  }, []);

    return (
        <>
        <div className="container">
            <div className="quote">{quote.text}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">By- {quote.author}</div>
                    <div className="icons">
                        <button onClick={fetchQuote}>New Quote</button>
                        <button onClick={share}>Share</button>
                    </div>
                </div>
            </div>

        </div>
            <footer >
  ~ Made by <a href="https://github.com/Nikita-Gupta23" target="_blank" rel="noreferrer">Nikita Gupta</a>
</footer>
</>
    )
}
export default RandomQuote