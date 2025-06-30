import React, { useEffect, useState } from 'react';

const DailyQuote = () => {
  const [quote, setQuote] = useState({
    quote: "",
    author: ""
  });

  // will not work here because of that cors or something so wil setup it in backend 
  useEffect(() => {
    // fetch("https://quotes.rest/qod")
    fetch("https://api.allorigins.win/raw?url=https://quotes.rest/qod")
      .then((res) => res.json())
      .then((data) => {
        const dailyQuote = data.contents.quotes[0];
        setQuote({
          quote: dailyQuote.quote,
          author: dailyQuote.author
        });
      })
      .catch((err) => console.log(err)); 
  }, []);
  console.log(quote.quote);
  return (
    <div>
      <p>"{quote.quote}"</p>
      <p>- {quote.author}</p>
    </div>
  );
};

export default DailyQuote;
