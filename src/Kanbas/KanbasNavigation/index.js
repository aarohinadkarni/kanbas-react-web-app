import '../styles.css'
import './index.css'
import '../index.css'
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaTachometerAlt, FaBook, FaCalendarAlt, FaInbox, FaClock, FaPhotoVideo, FaSignOutAlt, FaQuestionCircle } from "react-icons/fa";
import logo from './northeastern_icon2.png';

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = {Account : <FaUserCircle/>, Dashboard: <FaTachometerAlt/> , Courses:<FaBook/>, Calendar:<FaCalendarAlt/>, Inbox:<FaInbox/>, History:<FaClock/>, Studio:<FaPhotoVideo/>, Commons:<FaSignOutAlt/>,Help: <FaQuestionCircle/>};
  const { pathname } = useLocation();
  return (
    <div class="wd-account-flex-column-container">
      <div className="list-group wd-kanbas-navigation" style={{ backgroundColor: 'black' }}>
        <div class="image-container">
          <img src={logo}/>
        </div>
        {links.map((link, index) => {
                     return (
                         <>
                           <Link
                               key={index}
                               to={`/Kanbas/${link}`}
                               className={`list-group-item ${pathname.includes(link) && "active"} ${link === "Account" ? (pathname.includes("Account") && "active" ? "account-active" : "account") : ""}`}>
                              {icons[link]}<br/>
                             {link}
                           </Link>
                         </>
                     )})}
      </div>
    </div>
  );}
export default KanbasNavigation;