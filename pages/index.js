import React, { useState, Fragment } from 'react';
import Popup from "reactjs-popup";
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TumblrShareButton,

  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon
} from 'react-share';





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
              padding: '0 0px 20px',}}
               >
              {quoteIndex?<span className="btn" onClick={()=> setQuoteIndex(quoteIndex-1)}> {previousButton} </span>: <span className="btn-disabled" disabled>{previousButton}</span>}
              
              <ShareButtons data={currentQuote}/>

              {arrayLimit?<span className="btn" onClick={()=> setQuoteIndex(quoteIndex+1)}> {nextButton} </span>:<span className="btn-disabled" disabled>{nextButton}</span>}
              </div>
            
           
          </Popup>
          
          ):''} 
      </div>
   
    <Footer/>
    </Fragment>
  );
}

const ShareButtons = props => {

 const currentQuote = props.data

return(
  <div style={{display:'flex', cursor: 'pointer',  width: '32%',justifyContent: 'space-around'}}>
     
  
          <TumblrShareButton url={currentQuote.gif} title={currentQuote.sub} windowWidth={660} windowHeight={460} >

            <TumblrIcon size={30} round iconBgStyle={{fill: '#FF8B00'}} />

          </TumblrShareButton>

          
          <RedditShareButton url={currentQuote.gif} title={currentQuote.sub} windowWidth={660} windowHeight={460} >

          <RedditIcon size={30} round iconBgStyle={{fill: '#FF0135'}} />

          </RedditShareButton>


          <TelegramShareButton url={currentQuote.gif}title={currentQuote.sub}>

            <TelegramIcon size={30} round iconBgStyle={{fill: '#FFD350'}} />

          </TelegramShareButton>

          <TwitterShareButton url={currentQuote.gif} title={currentQuote.sub} >

            <TwitterIcon size={30} round  iconBgStyle={{fill:' #266EF6'}}/>

          </TwitterShareButton>


          <FacebookShareButton url={currentQuote.gif} quote={currentQuote.sub} >

            <FacebookIcon size={30} round  iconBgStyle={{fill: '#E429F2'}}/>

          </FacebookShareButton> 

         

          <WhatsappShareButton url={currentQuote.gif} separator=" ">

                <WhatsappIcon  size={30} round iconBgStyle={{fill: '#12E772'}}/>
                
          </WhatsappShareButton>
  </div>
)
}

