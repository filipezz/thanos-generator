import React from 'react';
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'

export default function Footer(){

	

return(
    <footer style={{
		display: 'flex',
		flexDirection: 'column'}}>

		<div>
        <p dangerouslySetInnerHTML={{
			 __html: `<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=291&l=ur1&category=gift_certificates&banner=0JT8TZNT9KPCBJT9YY82&f=ifr&linkID=1c0f902ba6f9be9276aadec91fcff808&t=thanosgenerat-20&tracking_id=thanosgenerat-20" width="290" height="85" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
			 `}}/>
     	</div>


    <div>
        <span>Made by Filipez</span>
        
          <a href='https://github.com/filipezz'> <img  height="30px" src={github} alt="Github icon"/></a>
          <a href='https://twitter.com/FilipeeZ'> <img  height="30px" src={twitter} alt="Twitter icon"/></a>
       </div>
    </footer>
)
}
