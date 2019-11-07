import React, { useState, Fragment } from 'react';
import Popup from "reactjs-popup";



import Meta from '../components/Meta';
import Footer from '../components/Footer'

import movies from '../movies/index'


export default function Index() {
  const [quote, setQuote] = useState('')
  const [quoteIndex, setQuoteIndex] = useState(1)
  
  
  
  const movieQuotes = movies.infinitywar.subs
  
  
  const search = Object.values(movieQuotes).filter(x => new RegExp(quote, 'i').test(x.sub)).slice(-10)
  
  
  const currentQuote = movieQuotes[quoteIndex]
  
  const nextButton = ">"
  const previousButton = "<"

  const arrayLimit=quoteIndex<movieQuotes.length-1


  
  return (
    
    
    <Fragment>
    <Meta/>
      <input 
      onChange={event=> setQuote(event.target.value)}
      value={quote} 
      placeholder="Search a Mad Titan quote"
      autoFocus
      type="text"/>


      
      <div className="search-container">
     {quote.length? search.map(subs=> 

        
          <Popup  key={subs.index}  contentStyle={{
            position: 'relative',
            background: 'rgba(22, 22, 22, 0.9)',
            maxWidth: "700px",
            width: "80%",
            margin: 'auto',
            padding: '15px',
            border: 0,
            borderRadius: '3px',
            fontSize: '3vw',
           }}
            trigger={<ul className="search-results">{subs.sub}</ul> } modal closeOnDocumentClick
            onOpen={()=> setQuoteIndex(subs.index-1) }>
              
              <video className="modal-gif" src={currentQuote.gif} alt={currentQuote.sub}  preload="true" loop autoPlay/>
              <h5 className="modal-h5">{currentQuote.sub}</h5>
              <p className="modal-p">{currentQuote.time}</p>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0 40px 20px',}}
               >
              {quoteIndex?<span className="btn" onClick={()=> setQuoteIndex(quoteIndex-1)}> {previousButton} </span>: <span className="btn-disabled" disabled>{previousButton}</span>}
              {arrayLimit?<span className="btn" onClick={()=> setQuoteIndex(quoteIndex+1)}> {nextButton} </span>:<span className="btn-disabled" disabled>{nextButton}</span>}
              </div>
            
           
          </Popup>
          
          ):''} 
      </div>
   
    <Footer/>
    </Fragment>
  );
}
