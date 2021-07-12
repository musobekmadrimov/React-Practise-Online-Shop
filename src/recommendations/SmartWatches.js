import React from 'react';
import SmartWatch from './JSON/smartWatches.json';
export default function SmartWatches() {
    let i = 0;
    return (
        <div className="recommendedProducts">
            <div className="titles">
                <p>Explore Awesome Products</p>
                <h4>RECOMMENDED FOR YOU</h4>
            </div>
            <div className="cards">
                {SmartWatch.map((item) => {
                    return (
                        <div className="productCard" key={++i}>
                            <img src={item.img} alt="SmartWatch" />
                            <p>{item.productName}</p>
                            <div className="price">
                                {item.price}
                            </div>
                        </div>
                    )
                })}
            </div>
            <a href="#" className="exploreBtn">Explore Other Products</a>
        </div>
    )
}
