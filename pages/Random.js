import React,{Fragment, useState} from 'react';

import Meta from '../components/Meta';

import Thanos from '../lib/index'
import placeholder from '../assets/placeholder.png'



export default function Random() {
    const[randomQuote, setRandomQuote] = useState('')
    
  return (
    <Fragment>
      <Meta/>
         <div className="content">
        
        <h2>Click on the gauntlet to get a random quote</h2>
        
        
          <img className="gif" src={randomQuote?randomQuote.gif_url: placeholder } alt='Thanos'/>
          <h3>{randomQuote.quote}</h3>
        
    
         <div className='gauntlet-container'>
          <div className="gauntlet-div">
            <Thanos/>
          </div>
        </div>
        </div>
    </Fragment>
  );
}
