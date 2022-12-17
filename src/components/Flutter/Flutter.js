import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './Flutter.css'

const Flutter= () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />
            
            <div className='about center'>
                <h1>
                    <span className='about__name'>Flutter: Predict Age of Person By Name</span>
                </h1>
                
                <h2 className='subtitle'>Learning Flutter and how to involve asynchronous calls from API</h2>
                
                <h3 className='about__role'> Goal: </h3>
                <p className='about__desc'>
                    The goal of the application is for users to input a name into a field to call an API which tells what the predicted age 
                    of that person is. The goal in developing this application is to learn a different framework other than React, gain experience 
                    with mobile development which is flutter and be able to use aynsochronous calls with it.
                </p>

                <h3 className='about__role'> App: </h3>
                <img className="img_cart" src={require("../../images/flutter/flutter_app.png")}  alt="BakeryV1 Mainpage"/>

                <h3 className='about__role'> Implementation: </h3>
                <p className='about__desc'>
                    asynchronous function
                </p>
                <img className="img_code" src={require("../../images/flutter/flutter_async_code.png")}  alt="BakeryV1 Mainpage"/>
                <p className='about__desc'>
                    Use of futurebuilder in the widget to handle the asynchronous call
                </p>
                <img className="img_code" src={require("../../images/flutter/flutter_futurebuilder_code.png")}  alt="BakeryV1 Mainpage"/>
                <p className='about__desc'>
                    textfield to get input from user for name
                </p>
                <img className="img_code" src={require("../../images/flutter/flutter_textfield_code.png")}  alt="BakeryV1 Mainpage"/>

             </div>
        </div>
        
      )
}

export default Flutter