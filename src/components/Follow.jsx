import React from 'react';
import "../components/Follow.css";

const Follow = () => {
    return (
        <div className="follow">
        <p>Follow Micorsoft</p>
        <div className="follow__image">
        <img src="./images/follow/facebook.png" alt="facebook"/>
        <img src="./images/follow/twitter.png" alt="twitter" />
        <img src="./images/follow/youtube.png" alt="youtube" />
        </div>
        </div>
    )
}

export default Follow;
