import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoute } from "../../const";

const Header = () => {

  // const location = window.location.pathname;
  let location = useLocation();
  

  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <Link to="/"
            className={
              `main__header-lnk 
            ${location.pathname === AppRoute.MAIN && 'lnk-active'} 
            ${location.pathname === AppRoute.ADD && 'lnk-active'}`
            }
          >События
          </Link>

          <Link to="/archive" 
            className={
              `main__header-lnk 
            ${location.pathname === AppRoute.ARCHIVE && 'lnk-active'}`
            }
          >Архив
          </Link>
        </div>
      </section>
    </section>
  )
}

export default Header;