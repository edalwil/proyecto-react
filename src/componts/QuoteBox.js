import React, { useState } from "react";
import quote from "../quotes.json";

const getRandom = () => Math.floor(Math.random() * quote.length);

const colour = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#845EC2",
  "#2C73D2",
  "#008F7A",
  "#C34A36",
  "#4B4453"
];

const QuoteBox = () => {
  const [phrase, setPhrase] = useState(quote[getRandom()]);

  const changePhrase = () => {
    setPhrase(quote[getRandom()]);
  };

  const color = colour[Math.floor( Math.random() * 6 )]

  document.body.style = `background: ${color}`

  return (
    <div className="QuoteBox" style={{color:color}}>
      <div className="container-quote">
        <i className="fa-solid fa-quote-left fa-xl" style={{color:color}}></i>
        <div className="box-phrase"><p>{phrase.quote}</p></div>
      </div>
      <h3>{phrase.author}</h3>
      <button onClick={changePhrase}>
        <i class="fa-solid fa-angle-right fa-xl" style={{background:color}} ></i>
      </button>
    </div>
  );
};

export default QuoteBox;
