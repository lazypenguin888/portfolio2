import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import './BakeryV2.css'

const BakeryV2 = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
            <Header />
            
            <div className='about center'>
                <h1>
                    <span className='about__name'>BakeryV2</span>
                </h1>
                
                <h2 className='subtitle'>Deepening my React skills/knowledge with an improved implementation of BakeryV1</h2>
                
                <h3 className='about__role'> Goal and Value of the Application: </h3>
                <p className='about__desc'>
                    The goal/value of the application is for users to view items of a bakery that can be sorted by price and filtered by 
                    either vegan and gluten-free options. Each backery item has a name, description, image, price, filter tags, and option to 
                    add to cart. Also, as users can add items to cart, they can view what they have in the cart, the total price, and option to 
                    remove items from cart.
                </p>

                <h3 className='about__role'> Webpage: </h3>
                <img className="img_main" src={require("../../images/bakeryv2/bakeryv2_main.png")}  alt="BakeryV1 Mainpage"/>

                <h3 className='about__role'> Filtering aspect: </h3>
                <img className="img_main" src={require("../../images/bakeryv2/bakeryv2_filter.png")}  alt="BakeryV1 Mainpage"/>

                <h3 className='about__role'> Cart: </h3>
                <img className="img_cart" src={require("../../images/bakeryv2/bakeryv2_cart.png")}  alt="BakeryV1 Mainpage"/>

                <h3 className='about__role'> Usability Principles Considered: </h3>
                <p className='about__desc'>
                    Layout: Made a grid for all bakery items easy to view, also separated each item as a round rectangle like a card. Use of colors to match concepts, like the vegan and gluten-free filters combined with the toggle button.
                </p>
                <p className='about__desc'>
                    Hierarchy: Made sure to have all bakery items the same type of card/hierachy with emphasis of the item's name and example image. Shopping cart items were also same type of card/hierachy but smaller version of the bakery items listed as description/details are not important for cart items. Also hierachy of text for categories of bakery items and cart.
                </p>

                <h3 className='about__role'> Organization of Components: </h3>
                <p className='about__desc'>
                    Had two main components which were Item and cartItem, they are relatively similar, the major difference is that the cartItem has less details and is smaller than that of the Item component. These components were created as they are multiple bakery items and they are in the same category.
                </p>

                <h3 className='about__role'> How Data is Passed Down Through Components: </h3>
                <p className='about__desc'>
                    Data that is passed into the Item component is data from the data.json file which contains information name, description, price, image, vegan, and gluten-free. All that information is in the form of a list for each of the 12 bakery items and then mapped into each Item compoenent.
                </p>
                <p className='about__desc'>
                    Data that is passed into the cartItem component is similar to that of the Item component but with only information on name, price, and count. That information is passed into the cartItem component the same wasy as the item component with the use of mappings.
                </p>

                <h3 className='about__role'> How the User Triggers State Changes: </h3>
                <p className='about__desc'>
                    Each of the buttons and toggles on the page trigger state changes which are the add/remove to cart button, sort button, and toggle switch for vegan and gluten-free options. With the use of state/setState for availableItems and cart we can keep track of which items are available to shop based on user preferences and what is in the cart so far. When sorting price or filtering by vegan/gluten-free the avaiableItems state change is triggered. When the add to or remove from cart the cart state change is triggered.
                </p>

             </div>
        </div>
        
      )
}

export default BakeryV2