import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './BakeryV1.css'

const BakeryV1 = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />
            
            <div className='about center'>
                <h1>
                    <span className='about__name'>BakeryV1</span>
                </h1>
                
                <h2 className='about__role'>Learning React with my first implementation of a functional bakery shop website</h2>
                
                <p className='about__desc'>
                    The goal of this project was to learn about the use of state variables to keep track of what’s in the shopping cart, 
                    using callback functions to update the state, and using the map function to render the bakery items.
                </p>

                <h3 className='about__role'> Webpage: </h3>
                <img className="img_main" src={require("../../images/bakeryv1/bakeryv1_main.png")}  alt="BakeryV1 Mainpage"/>

                <h3 className='about__role'> Cart: </h3>
                <img className="img_cart" src={require("../../images/bakeryv1/bakeryv1_cart.png")}  alt="BakeryV1 Mainpage"/>

                <p className='about__desc'>
                    Used state variable cart to keep track of the items in the shopping cart, with a setCart function to update the state. 
                    To render the bakery items, they were mapped onto components. Both ideas shown in the code snippets below:
                </p>
                <img className="img_code" src={require("../../images/bakeryv1/bakeryv1_aggregation_states_code.png")}  alt="BakeryV1 Mainpage"/>
                <img className="img_code" src={require("../../images/bakeryv1/bakeryv1_map_code.png")}  alt="BakeryV1 Mainpage"/>

             </div>
        </div>
        
      )
}

export default BakeryV1