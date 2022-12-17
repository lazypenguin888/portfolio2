import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './Webdev.css'

const Webdev = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />
            
            <div className='about center'>
                <h1>
                    <span className='about__name'>Webdev: Bakery Gallery and Fruit API Call</span>
                </h1>
                
                <h2 className='subtitle'>Learning the basics: JavaScript and HTML/CSS, responsiveness, API calls - asynchronous</h2>
                
                <h3 className='about__role'> Goal: </h3>
                <p className='about__desc'>
                    The application is consisted of two parts, the first part being a reponsive bakery gallery page, and the second part 
                    adding a button to retrieve data from an API about fruit data.
                </p>

                <h3 className='about__role'> Webpage: </h3>
                <img className="img_main" src={require("../../images/webdev/webdev_page.png")}  alt="BakeryV1 Mainpage"/>
                
                <h3 className='about__role'> Implementation Part 1 - Gallery: </h3>
                <p className='about__desc'>
                    Used flexbox to handle the gallery page neatly in a grid form. The responsiveness of the page to handle different platforms 
                    desktop, mobile, tablet are used in conditionals in the css file to handle the different window sizes. There
                </p>

                <h3 className='about__role'> Implementation Part 2 - Fruit API: </h3>
                <p className='about__desc'>
                    In webpage, there is a button at the bottom to call an API to retrieve data about Fruits. It retrieves only fruits based on the 
                    condtion on whether it is under a certain caloric amount - 50. This is done by an asynchronous call to the API, and when the response is 
                    returned the data is mapped for its certain attirbutes and then filtered based on caloric conditions.
                </p>

                <h3 className='about__role'> Code Snippet of Implementation for Part 2: </h3>
                <img className="img_code" src={require("../../images/webdev/webdev_code.png")}  alt="BakeryV1 Mainpage"/>

             </div>
        </div>
        
      )
}

export default Webdev