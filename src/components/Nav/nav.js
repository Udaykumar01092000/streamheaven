import React , {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import './nav.css';
import NetflixLogo from '../../images/NetFlixLogo.png'
import NetflixAvatar from '../../images/NetflixAvatar.png'

const Nav = () => {
    const [show , setShow] = useState(false);

    const NavbarVisibility = ()=>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll" , NavbarVisibility);

        return ()=>{
            window.removeEventListener("scroll" , NavbarVisibility)
        }
    },[])

  return (
    <div className= {`nav ${show && "nav-black"}`}>
        <Link to = "/">
            <img src={NetflixLogo} className='nav-logo' alt = "Logo"/>
        </Link>
        <img src= {NetflixAvatar} className='nav-avatar' alt='Logo'/>
    </div>
  )
}

export default Nav