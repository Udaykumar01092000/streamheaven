import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Question? Call 1-866-579-7172</p> 
        <div className='footer-cols'>
            <ul>
                <li>
                    <Link to="#">FAQ's</Link>
                </li>
                <li>
                    <Link to="#">Investor Relations</Link>
                </li>
                <li>
                    <Link to="#">Corporate Information</Link>
                </li>
                <li>
                    <Link to="#">Netflix Originals</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="#">Help Center</Link>
                </li>
                <li>
                    <Link to="#">Jobs</Link>
                </li>
                <li>
                    <Link to="#">Terms Of Use</Link>
                </li>
                <li>
                    <Link to="#">Contact Us</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="#">Account</Link>
                </li>
                <li>
                    <Link to="#">Reedem Gift Cards</Link>
                </li>
                <li>
                    <Link to="#">Privacy</Link>
                </li>
                <li>
                    <Link to="#">Spped Test</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="#">Media Center</Link>
                </li>
                <li>
                    <Link to="#">Buy Gift Cards</Link>
                </li>
                <li>
                    <Link to="#">Cookies Preferences</Link>
                </li>
                <li>
                    <Link to="#">Legal Notices</Link>
                </li>
            </ul>
        </div>   
    </footer>  
  )
}

export default Footer
