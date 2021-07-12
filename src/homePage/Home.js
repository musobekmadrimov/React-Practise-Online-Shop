import React from 'react'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import iPhoneImg from '../assets/images/iphones.jpg'

export default function Home() {
    return (
        <div className="home">
            <div className="main">
                <div className="leftSide">
                    <h3>GET THE NEW IPHONE 12 PRO</h3>
                    <p>A transformative triple camera system thad adds tons of capability without complexity.</p>
                    <div className="buttons">
                        <a href="#" className="button1">Buy Now <ShoppingBasketIcon /></a>
                        <a href="#" className="button2">With 599$ with trade-in</a>
                    </div>
                </div>
                <div className="rightSide">
                    <img src={iPhoneImg} alt="iPhone Image"/>
                </div>
            </div>
        </div>
    )
}
