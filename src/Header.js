/*eslint-disable no-unused-vars*/

import React from 'react';
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase";


function Header() {
  const [{basket, user}, dispatch]= useStateValue();
const handleAuthentication = () => {
  if (user) {
    auth.signOut();

  }
}
  return (
    <div className="header">
       <Link to="/">
       <img
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG18.png"
            alt='Amazon logo'
         />
       </Link>
        

         <div className="header_search">
            <input 
            className="header_searchInput"  
             type="text" />
               <SearchIcon
               className="header_searchIcon" />
            </div>




         <div className="header_nav">
           <Link to={!user &&'/login'}> 
            <div onClick={handleAuthentication} className='header_option'>
                <span
                 className='header_optionLineOn
                 e'>Hello {!user ? 'Guest': user.email}</span>
                <span
                 className='header_optionLineTw
                 o'>{user ? 'Sign Out' :'Sign In'} </span>
            </div>
            </Link>
            <div className='header_option'>
            <span
                 className='header_optionLineOn
                 e'>Returns</span>
                 <span
                 className='header_optionLineTw
                 o'>& Orders</span>

            </div>

            <div className='header_option'>
            <span
                 className='header_optionLineOn
                 e'>Your</span>
                 
                 <span
                 className='header_optionLineTw
                 o'>Prime</span>
            </div>

            <Link to="/checkout">
            <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo
                header_basketCount">{basket.length} </span>
            </div>
            </Link>
            
            </div>
          </div>    
        
             
  )
}

export default Header;