import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../hooks/useDocumentTitle";

import bgImage from "../static/img/bg1.jpg";

const Landing = () => {
    useDocumentTitle("Trello");
    return (
        <div className="landing-banner">
            <img className="landing-banner__image" src={bgImage} />
            <div className="landing-banner__content">
                <h1 className="landing-banner__title">
                    Yet Another Trello
                </h1>
                {/* <h4 className="landing-banner__subtitle">
                    Trello is my favourite task management app. When I study Django and React, I use these two frameworks to reproduce my trello.
                </h4> */}
                <p >Demo Account Information</p>
                <p >Username: <b>client</b></p>
                <p className="landing-banner__subtitle">Password: helloworld</p>
                <Link to="/login" className="btn">
                    Login here
                </Link>
                
            </div>
        </div>
    );
};

export default Landing;
