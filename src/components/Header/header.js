import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NetflixLogo from '../../images/NetFlixLogo.png'; // Import the image

const Header = () => {
  return (
    <header className='showcase'>
      <div className='showcase-top'>
      <img 
            src={NetflixLogo} 
            alt='Netflix Logo' 
            className='logo'
          />
        <Link to="/" className='btn btn-rounded'>
            SignIn
        </Link>
      </div>
      <div className='showcase-content'>
        <h1>Unlimited Movies, Tv shows and more </h1>
        <p>Watch anywhere. Cancel Anytime</p>
        <Link to = '/netflixshow/' className='btn-header btn-xl'>
            Watch Free for 30 days 
            <i className='fas fa-chevron-right btn-icon'></i>
        </Link>
      </div>
    </header>
  );
};

export default Header;
