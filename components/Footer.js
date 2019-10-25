import React from 'react';
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'

export default function Footer(){
return(
    <footer>
        <span>Made by Filipez</span>
       
          <a href='https://github.com/filipezz'> <img  height="30px" src={github} alt="Github icon"/></a>
          <a href='https://twitter.com/FilipeeZ'> <img  height="30px" src={twitter} alt="Twitter icon"/></a>
       
    </footer>
)
}
