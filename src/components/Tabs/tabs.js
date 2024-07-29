import React from 'react'
import { tabLevels } from './constant'
import { Link } from 'react-router-dom'
import './tabs.css'
import cancel from '../../images/cancel.png'
import tab2Img1 from '../../images/tab2img1.png'
import tab2Img2 from '../../images/tab2img2.png'
import tab2Img3 from '../../images/tab2img3.png'

const Tabs = ({activeTabName , onClickTab}) => {
  
  const {CANCEL_ANY_TIME , WATCH_ANYWHERE ,PICK_YOUR_PRICE} = tabLevels;

  const renderTabTitle = (tabTitle , isActive , icon , id) =>(
    <div onClick = {()=> onClickTab(tabTitle)} 
         id = {id} 
         className = {`tab-item ${isActive && "tab-border"}`}
    >
        <i className = {icon}></i>
        <p>{tabTitle}</p>
    </div>
  )
    return (
    <>
        <section className='tabs'>
            <div className='container'>
                {renderTabTitle(CANCEL_ANY_TIME , 
                 activeTabName === CANCEL_ANY_TIME , 
                 "fas fa-door-open fa-3x" , 
                 "tab-1"
                )}   
                 {renderTabTitle(WATCH_ANYWHERE , 
                 activeTabName === WATCH_ANYWHERE , 
                 "fas fa-tablet-alt fa-3x" , 
                 "tab-2"
                )}    
                {renderTabTitle(PICK_YOUR_PRICE , 
                 activeTabName === PICK_YOUR_PRICE , 
                 "fas fa-tags fa-3x" , 
                 "tab-3"
                )}    
            </div>    
        </section>  
        {activeTabName === CANCEL_ANY_TIME && (
            <section className='tab-content'>
                <div className='container'>
                    <div id = "tab-1-content" className={`tab-content-item ${activeTabName === CANCEL_ANY_TIME && "show"}`}>
                    <div className='tab-1-content-inner'>
                        <div>
                            <p className='text-lg'>
                                If you decide Netflix isn't for you - no problem .
                                 No commitment cancel online anytime.
                            </p>
                            <Link to = "/netflixshow" className='btn btn-lg'>
                                Watch Free For 30 days
                            </Link>
                        </div>
                        <img src = {cancel} alt = "cancel"/>
                    </div>
                    </div>
                </div>
            </section>
        )}
        {activeTabName === WATCH_ANYWHERE && (
            <section className='tab-content'>
                <div className='container'>
                    <div id = "tab-2-content" className= {`tab-content-item ${activeTabName === WATCH_ANYWHERE && "show"}`}>
                    <div className='tab-2-content-top'>
                        <div>
                            <p className='text-lg'>
                                Watch Tv shows and movies anytime , anywhere - personalized for you.
                            </p>
                            <Link to = "/netflixshow" className='btn btn-lg tab2'>
                                Watch Free For 30 days
                            </Link>
                        </div>
                    </div>
                    <div className='tab-2-content-bottom'>
                        <div>
                            <img src = {tab2Img1} alt = ""/>
                            <p className='text-md'>Watch on your TV</p>
                            <p className='text-md'>Smart Tvs , Play Station , Xbox , 
                            Chromecaste , Apple TV , Blu-ray players and more</p>
                        </div>
                        <div>
                            <img src = {tab2Img2} alt = ""/>
                            <p className='text-md'>Watch instantly or download later</p>
                            <p className='text-md'>Available on phone , tablet wherever you go</p>
                        </div>
                        <div>
                            <img src = {tab2Img3} alt = ""/>
                            <p className='text-md'>Use any computer</p>
                            <p className='text-md'>Watch right on Netflix.com</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )}
        {activeTabName === PICK_YOUR_PRICE && (
            <section className='tab-content'>
                <div className='container'>
                    <div id = "tab-3-content"
                    className={`tab-content-item ${
                    activeTabName === PICK_YOUR_PRICE && "show"    
                    }`}>
                        <div className='text-center'>
                            <p className='text-lg'>
                                Choose one plan and watch everything on Netflix.
                            </p>
                            <Link to = "/netflixshow" className='btn btn-lg'>
                                Watch Free For 30 Days
                            </Link>
                        </div>
                        <table className='planstable'>
                            <tbody>
                                <tr className='planshead'>
                                    <td></td>
                                    <th>Basic</th>
                                    <th>Standard</th>
                                    <th>Premium</th>
                                </tr>
                                <tr>
                                    <td>Monthly price after free month ends on 6/19/2021</td>
                                    <td>$6.99</td>
                                    <td>$11.99</td>
                                    <td>$15.99</td>
                                </tr>
                                <tr>
                                    <td>HD Available</td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Ultra HD Available</td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-times'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Screens you can watch on at the same time</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Watch on your Laptop , Tv , Phone and Tablet</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Unlimited Movies and Tv Shows</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>Cancel At Any Time</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                                <tr>
                                    <td>First month free</td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                    <td><i className='fas fa-check'></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )}
    </>
  )
}

export default Tabs