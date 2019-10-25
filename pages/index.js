import React, { useState } from 'react';
import Popup from "reactjs-popup";


import Layout from "../components/Layout.js"
import Meta from '../components/Meta';
import Footer from '../components/Footer'

import movies from '../movies/index'



export default function Index() {
  const[quote, setQuote] = useState('')
  
 

  const movieQuotes = movies.infinitywar.subs


  const search = Object.values(movieQuotes).filter(x => new RegExp(quote, 'i').test(x.sub)).slice(-5)



  return (
    
    
    <Layout>
    <Meta/>
      <input 
      onChange={event=> setQuote(event.target.value)}
      value={quote} 
      placeholder="Search for a Mad Titan quote"
      autoFocus
      type="text"/>


      
      <div className="search-container">
     {quote.length? search.map(subs=> 
        
          <Popup  contentStyle={{position: 'relative',
            background: 'rgba(22, 22, 22, 0.9)',
            width: '50%',
            height: '70%',
            margin: 'auto',
            padding: '5px',
            border: 0,
            borderRadius: '3px',
            fontSize: '3vw',
           }}
            trigger={<ul className="search-results">{subs.sub}</ul>} modal closeOnDocumentClick>
              
              <img src="https://i.imgur.com/7ChVWbF.gif" alt={subs.sub}/>
              <h2>{subs.sub}</h2>
              <p>{subs.time}</p>
              
           
          </Popup>
          ):''} 
      </div>
   
    <Footer/>
    </Layout>
  );
}
