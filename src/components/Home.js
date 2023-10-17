import '../Stylesheets/Home.css'
import "animate.css/animate.min.css";
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import i18next from 'i18next';


export default function BnerContent(props) {
  const Slng = i18next.language;
  console.log(Slng)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const Bw_Data = document.querySelector('#LngManp');
    if (Slng == 'ur')
    Bw_Data.style.direction = 'rtl';
    else
    Bw_Data.style.direction = 'ltr';
  }, [Slng]);

  return (
    <>
      <main>
        <section id="Gradient_Home">
          <div className="Banner_Wrapper">
            <div id='LngManp' className='BW_Data-left'>
            <span className="Item__1">
              
              <h1>{props.title}</h1>
            </span>
            <span className="Item__2">
              <p>
               {props.description}
              </p>
            </span>
            <span className="Item__3">
              <a href="" target="_blank">
                <button className="BANR_INF_BTN AddcC">Let's Go &nbsp;&nbsp;<FontAwesomeIcon icon='car-side'/></button>
              </a>
            </span>
            </div>
            <div className='BW_Data-right'>
            <span className="Item__4">
              <img src={props.logo} alt=":)"/>
            </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
