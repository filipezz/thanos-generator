import Head from 'next/head'


import placeholder from '../assets/placeholder.png'
import './style.css'

export default () => (
  <div className="app">
    <Head>
    
      <meta property="og:video" content="https://media.giphy.com/media/H4QoidBOOFhPpZz4jr/giphy.mp4" />

      <meta key="description" name="description"content="A website that delivers Thanos quotes in a snap of fingers"/>
      <script data-ad-client="ca-pub-6973490453215918" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-95R57WF6VV"></script>
          <script
      dangerouslySetInnerHTML={{
        __html:`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-95R57WF6VV');`}}
      />
      <script
      dangerouslySetInnerHTML={{
        __html: `if (typeof window !== "undefined") {
        // hacky force https
        if (window.location.protocol != "https:") {
          window.location.href =
            "https:" +
            window.location.href.substring(window.location.protocol.length);
        }
      }`
      }} 
    />     
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href={placeholder} />
      <title>Thanos Generator</title>
    </Head>
    <h1>Thanos Generator</h1>
        <div className='stars'/>
        <div className='stars2'/>
        <div className='stars3'/>
    <style jsx global>{`
  
    html{
      height: 300%;
      color:white;
      background-image: linear-gradient(#351B64, #200930);
      font-family: 'Roboto',Verdana,sans-serif;
      text-align: center;
    }
      
    h1{
      font-size: 3rem;
      letter-spacing: 1.2px;
    text-transform: uppercase;
    text-shadow: 6px 3px 8px #000;
    -webkit-text-stroke-width: medium;
    color: blueviolet;
}
    }
    h3{
      margin-top: 0;
      color: goldenrod;
      font-style: italic;
      font-family: monospace;
      font-size: x-large;
      position: relative;

    }
    ul{
      font-size: 1.7em;
      color: goldenrod;
      font-style: italic;
      font-family: monospace;
      margin-bottom: 1.3rem;
      margin-top: 1.3rem;
      width: 50%;
    }
    .gif{
        border-radius: 5px;
        box-shadow: 9px 5px 15px #000;
        border: 2px solid #e0c021;
        align-self: center;
        margin-bottom: 25px;
        position:relative;
    }

    .content{
      display:flex;
      flex-direction:column
    }

    .hide{
      visibility:hidden
    }

    .gauntlet-div{
      width: 43px;
      length: 69px;
    }
      
    }
    .gauntlet-container{
      display:flex;
      justify-content:center
    }

    footer{
      margin-top:130px;
      display: flex;
      align-items:center;
      justify-content:center;
     
    }
    footer span{
      margin-right: 5px
    }
    footer img{
      margin-right: 5px;
      margin-left: 5px;
    }
   input{
    width: 90%;
    height: 5rem;
    background: rgba(255, 255, 255, 0);
    color: #f3f3f3;
    font-size: 3.5rem;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.4);
    outline: 0;
    padding: 9px 15px;
    border-radius: 5px;
    border: 1px solid #e0c021;
    

  }
  .btn{
    color: white;
    border-radius: 100%;
    font-size: 1.5rem;
    padding: 6px 13px;
    cursor: pointer;
    background: transparent;
    border: 1px solid;
    transition: .2s ease-in-out;
  }
  .btn:hover{
    background:#e0c021;
    color: #161616
    

  }
  .btn:active{
    background:#e0d900;;
    color: #161616
    

  }

  .btn-disabled{
    cursor: not-allowed;
    background: rgba(0,0,0,0);
    color: white;
    border-radius: 100%;
    font-size: 1.5rem;
    padding: 6px 13px;
    border: 1px solid;
    opacity:0.4
  }
  ::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-weight: 100;
  }

  .search-container{
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
  .search-results{
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;    
    position:relative;
    margin-top: 0.5rem;
    
    padding-left: 0.5rem;
   
    
  }
   .search-results:hover{
    background: rgb(74, 20, 150);
    transition: .5s;
    border-radius: 6px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.4);
    cursor: pointer;
    
   }
   .search-results:active{
    background: rgb(74, 20, 200);
    transition: 0.1s;
   }

   .modal-gif{
    width: 45vw;
    
  }
  .modal-h5{
    font-size: 0.53em;
    
  }
  .modal-p{
    font-size: 0.43em;
    color: crimson;
  }
  @media (max-width: 768px){
    .modal-gif{
      width: 70vw;
  }
  .modal-h5{
    font-size: 1em;
  }
  .modal-p{
    font-size: 0.6em;
  }
  
}
@media (max-width: 425px){
  .modal-gif{
    width: 80vw;
}
.modal-h5{
  font-size: 2em;
}
.modal-p{
  font-size: 1em;
}
}
 

   @media (max-width: 830px){
   input {
      font-size: 6.5vw;
    }
   }
   @media (max-width: 510px){
   input {
    height: 3rem;
    padding: 1vh 1vh;
   }
   ul{
    width: 75%;
   }
  }
  
    
  
    `}</style>
  </div>
)