import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "animate.css/animate.min.css";
import "../Stylesheets/Navbar.css";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import DataContext from "../Contexts/DataContext";
import {StProvider} from '../Contexts/StateContext'
import NavMenu from "./NavMenu";
import { useTranslation } from 'react-i18next';

export default function Navbar(props) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.getElementById("Menu_BTN").addEventListener("click", (e) => {
      e.target.classList.remove("Btn_Aniim");
      setTimeout(() => {
        e.target.classList.add("Btn_Aniim");
      });
    });
  }, []);

  const Scroll_Top = useContext(DataContext);
  const [NavMn, setNavMenu] = useState("none");
  const [MenuIcon, setMenIc] = useState("bars");

  window.addEventListener("scroll", () => {
    const nav = document.querySelector("#nav_wrapper");
    if (window.scrollY > 0) nav.classList.add("Scroll_border");
    else nav.classList.remove("Scroll_border");
  });

  const ToggleIcon = () => {
    if (NavMn == "none") {
      setNavMenu("block");
      setMenIc("x");
    } else {
      setNavMenu("none");
      setMenIc("bars");
    }
  };

  const lngs = {
    ur : { nativeName : 'Urdu', flag : 'https://www.worldometers.info/img/flags/pk-flag.gif'},
    en : { nativeName: 'English', flag : 'https://www.worldometers.info/img/flags/uk-flag.gif', },
    fr : { nativeName: 'French', flag : 'https://www.worldometers.info/img/flags/fr-flag.gif' },
    ger : { nativeName: 'German', flag : "https://www.worldometers.info/img/flags/gm-flag.gif"},
    ara : { nativeName: 'Arabic', flag : "https://www.worldometers.info/img/flags/sa-flag.gif"},
    ja : { nativeName: 'Japanese', flag : "https://www.worldometers.info/img/flags/ja-flag.gif"},
    ru : { nativeName: 'Russian', flag : "https://www.worldometers.info/img/flags/rs-flag.gif"},


  };

  const Tgle_LngChng = () => {
    props.setSpner();
    Scroll_Top();
  }

  return (
    <>
      <header id="nav_wrapper" className="nav_wrapper">
        <nav id="nav">
          <div className="nav left">
            <span className="Main_Logo">
              <Link to="/" onClick={Scroll_Top}>
                {t('Navbar.Titles.Logo')}
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/" onClick={Scroll_Top} className="Lst_Anim">
              {t('Navbar.Titles.Home')}
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/Services" onClick={Scroll_Top} className="Lst_Anim">
              {t('Navbar.Titles.Services')}
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/AboutUs" onClick={Scroll_Top} className="Lst_Anim">
              {t('Navbar.Titles.About')}
              </Link>
            </span>
            <span className="nav-link">
              <Link to="/Contact" onClick={Scroll_Top} className="Lst_Anim">
              {t('Navbar.Titles.Contact')}
              </Link>
            </span>
          </div>

          <div className="nav right">
            <span className="Clapsed_Btn">
              <button id="Menu_BTN" onClick={ToggleIcon} className="btn-nav">
                <FontAwesomeIcon icon={`${MenuIcon}`} size="lg" />
              </button>
            </span>
            <span className="Res_dropdown">
              <FontAwesomeIcon
                style={{ margin: "3.2vh 0 0 0" }}
                icon="globe"
                size="xl"
              />
        <NavDropdown  id="basic-nav-dropdown">
            {Object.keys(lngs).map((lng)=> (
              <NavDropdown.Item key={lng} style={{fontWeight : i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} onClick={()=>{Tgle_LngChng();setTimeout(() => {
                i18n.changeLanguage(lng)
              }, 1200);}}>
              <img src={lngs[lng].flag} alt="Flag" width='25px' height='15px' />&nbsp;{lngs[lng].nativeName}
              </NavDropdown.Item>
            ))}
         </NavDropdown>
     </span>
            <span className="btn-cstm App_Downld try_trans">
              <a href="" target="_blank">
                {t('Navbar.Titles.Dapp')}
              </a>
            </span>
          </div>
        </nav>
        <StProvider value={ToggleIcon}>
        <NavMenu MenuDisplay={NavMn} />
        </StProvider>
      </header>
    </>
  );
}
