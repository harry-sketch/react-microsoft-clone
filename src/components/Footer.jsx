import React from 'react';
import {Link} from "react-router-dom";
import "../components/Footer.css";
import PublicIcon from '@material-ui/icons/Public';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
       <footer className="footer">
               <div className="first__footer">
                   <div>
                       <h3 className="footer__heading">What's new</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Micorosft 365</Link></li>
                           <li className="footer__items"><Link to="">Surface Pro X</Link></li>
                           <li className="footer__items"><Link to="">Surface Pro 7</Link></li>
                           <li className="footer__items"><Link to="">Surface Laptop 3</Link></li>
                           <li className="footer__items"><Link to="">Windows 10 apps</Link></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="footer__heading">Microsoft Store</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Account Profile</Link></li>
                           <li className="footer__items"><Link to="">Download Center</Link></li>
                           <li className="footer__items"><Link to="">Micorsoft Store Support</Link></li>
                           <li className="footer__items"><Link to="">Returns</Link></li>
                           <li className="footer__items"><Link to="">Orde tracking</Link></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="footer__heading">Education</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Micorosft in education</Link></li>
                           <li className="footer__items"><Link to="">Office for students</Link></li>
                           <li className="footer__items"><Link to="">office 365 for schools</Link></li>
                           <li className="footer__items"><Link to="">Microsoft Azure  in education</Link></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="footer__heading">Enterprise</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Azure</Link></li>
                           <li className="footer__items"><Link to="">AppSource</Link></li>
                           <li className="footer__items"><Link to="">Automotive</Link></li>
                           <li className="footer__items"><Link to="">Government</Link></li>
                           <li className="footer__items"><Link to="">Healthcare</Link></li>
                           <li className="footer__items"><Link to="">Manufacturing</Link></li>
                           <li className="footer__items"><Link to="">Financial services</Link></li>
                           <li className="footer__items"><Link to="">Retail</Link></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="footer__heading">Developer</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Micorsoft Visual Studio</Link></li>
                           <li className="footer__items"><Link to="">Developer Center</Link></li>
                           <li className="footer__items"><Link to="">Channel 9</Link></li>
                           <li className="footer__items"><Link to="">Office Dev Center</Link></li>
                       </ul>
                   </div>
                   <div>
                       <h3 className="footer__heading">Company</h3>
                       <ul className="footer__links">
                           <li className="footer__items"><Link to="">Careers</Link></li>
                           <li className="footer__items"><Link to="">About Microsoft</Link></li>
                           <li className="footer__items"><Link to="">Conpany news</Link></li>
                           <li className="footer__items"><Link to="">Privacy at Microsoft</Link></li>
                           <li className="footer__items"><Link to="">Investors</Link></li>
                           <li className="footer__items"><Link to="">Security</Link></li>
                       </ul>
                   </div>
               </div>
               <div className="second__footer">
                   <div className="second__footerIcon">
                       <PublicIcon/>
                       <p>English (India)</p>
                   </div>
                   <ul className="footer__secondLink">
                       <li className="footer__secondItems"><Link to="">Contact MIcrosoft</Link></li>
                       <li className="footer__secondItems"><Link to="">Privacy</Link></li>
                       <li className="footer__secondItems"><Link to="">Terms of use</Link></li>
                       <li className="footer__secondItems"><Link to="">Trademarks</Link></li>
                       <li className="footer__secondItems"><Link to="">About our ads</Link></li>
                       <li className="footer__secondItems"><Link to="">About our ads</Link></li>
                       <li className="footer__secondItems"><Link to="">&copy; Created by Aloof Programmer {year}</Link></li>
                   </ul>
               </div>




       </footer>
    )
}

export default Footer
