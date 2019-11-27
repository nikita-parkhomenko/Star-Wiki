import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {

    return(
        <div className="ErrorIndicator">
            <img src={ icon } alt="error indicator" />
            <h1>BOOM!</h1>
            <p>Something has gon terribly wrong</p>
            <span>(But we already send droids to fix it)</span>
        </div>
    )
};

export default ErrorIndicator;