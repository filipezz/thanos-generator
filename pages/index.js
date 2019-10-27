import React, { useState, Fragment } from 'react';
import Popup from "reactjs-popup";



import Meta from '../components/Meta';
import Footer from '../components/Footer'

import movies from '../movies/index'



export default function Index() {
  const[quote, setQuote] = useState('')
  
 

  const movieQuotes = movies.infinitywar.subs


  const search = Object.values(movieQuotes).filter(x => new RegExp(quote, 'i').test(x.sub)).slice(-10)



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
        
          <Popup  contentStyle={{
            position: 'relative',
            background: 'rgba(22, 22, 22, 0.9)',
            maxWidth: "700px",
            width: "80%",
            margin: 'auto',
            padding: '5px',
            border: 0,
            borderRadius: '3px',
            fontSize: '3vw',
           }}
            trigger={<ul className="search-results">{subs.sub}</ul>} modal closeOnDocumentClick>
              
              <img className="modal-gif" src="https://i.imgur.com/7ChVWbF.gif" alt={subs.sub}/>
              <h5 className="modal-h5">{subs.sub}</h5>
              <p className="modal-p">{subs.time}</p>
              
           
          </Popup>
          ):''} 
      </div>
   
    <Footer/>
    </Fragment>
  );
}
