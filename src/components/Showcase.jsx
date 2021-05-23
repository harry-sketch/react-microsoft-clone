import React from 'react';
import "../components/Showcase.css";
import "../components/Showcase.css";


const Showcase = () => {
    return (
        <div className="show">
            <div className="show__box">
                <img src="./images/showcase/show-1.png" alt="show" />
                <h4>Choose your</h4>
                <h4>Microsoft 365</h4>
            </div>
            <div className="show__box">
                <img src="./images/showcase/show-2.png" alt="show" />
                <h4>Explore Surface </h4>
                <h4>Devices</h4>
            </div>
            <div className="show__box">
                <img src="./images/showcase/show-3.png" alt="show" />
                <h4>Buy Xbox games</h4>
                
            </div>
            <div className="show__box">
                <img src="./images/showcase/show-4.png" alt="show" />
                <h4>Shop for</h4>
                <h4>Windows 10</h4>
            </div>
        </div>
    )
}

export default Showcase;
