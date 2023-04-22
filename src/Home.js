import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='Home'>
      
      <div>
        <div className="home__container">
           <img className='home__image' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt=""/>
           <div className="home__row">
            {/*product*/}
            <Product 
            id="12321341"
            title="the Lean Startup: How Constant inovation creates Radically Succesful Business Paperback" 
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325,BO1,204,203,200_.jpg"
            rating={5}
             />
            <Product 
            id="49538094"
            title="kenwood Kmix Stand Mixer for Baking, Stylish Kitchen mixer with k-beater,Dough and Whisk, 5 Liter Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          
            {/*product*/}
           </div>
           <div className="home__row">
           <Product
           id="4903850"
           title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
           price={199.99}
           rating={5}
           image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
           />
           <Product
           id="23445930"
           title="Amazon Echo (3rd Generation) | smart speaker with Alexa, Charcoal Fabric"
           price={98.99}
           rating={5}
           image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retainamobilex25"
           
           />
           <Product 
           id="3254354435" 
           title="New Apple iPad Pro (12.9-inch, Wi-fi,128GB) - Silver (4th Generation)" 
           price={598.99} 
           rating={4}
           image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
           />

            
           </div>
           <div className="home__row">
            {/*product*/}
            <Product 
            id="90829332" 
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"  
            price={1094.98} 
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355_.jpg"
            />

           </div>
        </div> 
      </div>

    </div>
  )
}

export default Home