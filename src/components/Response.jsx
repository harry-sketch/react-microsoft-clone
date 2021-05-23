import React from 'react';
import {Link} from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "../components/Response.css";

const Response = () => {
    return (
        <div className="response">
        <div className="response__text">
            <h1>Microsoft's response to COVID-19</h1>
            <p>Read how we are responding to the COVID-19 outbreak,and get resources to help.</p>
            <div className="response__link">
                <Link to="">
                    Learn more
                </Link>
                  <ChevronRightIcon/>
            </div>

        </div>
            
        </div>
    )
}

export default Response;
