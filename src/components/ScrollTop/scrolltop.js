import React , {useState , useEffect} from 'react'
import './scrolltop.css'

const Scrolltop = () => {
    
    const[isVisible , setIsVisible] = useState(false);

    const toggleVisibility = ()=>{
        if(window.pageYOffset > 300)
        {
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }

    }

    const scrollToTop = ()=>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll" , toggleVisibility)

        return ()=>{
            window.removeEventListener("scroll" , toggleVisibility)
        }
    },[])

  return (
    <div className='scroll-to-top'> 
        {isVisible && (
            <div onClick={scrollToTop}>
                <i className='fas fa-arrow-circle-up custom-size'></i>
            </div>
        )}
    </div>
  )
}

export default Scrolltop