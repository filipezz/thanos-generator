import React, {Fragment, useState} from 'react';

import Meta from '../components/Meta';
import Footer from '../components/Footer'

import Thanos from '../lib/index'
import placeholder from '../assets/placeholder.png'

import movies from '../movies/index'



export default function random() {
    const[randomQuote, setRandomQuote] = useState('')
    
    const movieQuotes = movies.infinitywar.subs

    const random = movieQuotes[Math.floor(Math.random() * movieQuotes.length)]
   console.log(randomQuote)
    
  return (
    <Fragment>
      <Meta/>
         <div className="content">
        
        <h2>Click on the gauntlet to get a random quote</h2>
        
        
          <video preload="true" loop autoPlay className="gif" src={randomQuote?randomQuote.gif: placeholder } alt='Thanos'/>
          <h3>{randomQuote.sub}</h3>
        
    
         <div className='gauntlet-container'>
          <div onClick={()=>setRandomQuote(random)}className="gauntlet-div">
            <Thanos/>
          </div>
        </div>
        </div>
        <Footer/>
    </Fragment>
  );
}
