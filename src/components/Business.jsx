import React from 'react';
import Card from "./Card";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../components/Business.css";

const Business = () => {
    return (
        <>
        <h3 className="business__heading"> For business</h3>
        <div className="business">
        <Card img="./images/business/bus-1.png"
              heading = "Surface for Business"
              para="No matter what you do, there’s a Surface to help you do it."
              link="Shop now"
              sign={<ChevronRightIcon/>}
        />
        <Card img="./images/business/bus-2.png"
              heading = "Microsoft 365 for business"
              para="Stay a step ahead with powerful apps for productivity, connection and security."
              link="Shop now"
              sign={<ChevronRightIcon/>}
        />
        <Card img="./images/business/bus-3.png"
              heading = "Windows 10 Enterprise"
              para="Download the free 90-day evaluation for IT professionals."
              link="Download now"
              sign={<ChevronRightIcon/>}
        />
        <Card img="./images/business/bus-4.png"
              heading = "Introducing Microsoft Viva"
              para="Discover the new employee experience platform designed to help people connect, focus, learn and thrive at work."
              link="Learn more"
              sign={<ChevronRightIcon/>}
        />
            
        </div>

        </>
    )
}

export default Business;
