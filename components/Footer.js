import React from "react";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: `<iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=26&l=ur1&category=primeent&banner=0VJV71SCG57R1JS5TK02&f=ifr&linkID=7cce0b9b2603f40f5185ac551089eac2&t=thanosgenerat-20&tracking_id=thanosgenerat-20" width="468" height="60" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
			 `
          }}
        />
      </div>

      <div>
        <span>Made by Filipez</span>

        <a href="https://github.com/filipezz">
          {" "}
          <img height="30px" src={github} alt="Github icon" />
        </a>
        <a href="https://twitter.com/FilipeeZ">
          {" "}
          <img height="30px" src={twitter} alt="Twitter icon" />
        </a>
      </div>
    </footer>
  );
}
