import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, inverted, isGoogleSignIn, ...otherProps }) => (
    // <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}{...otherProps}>
    //     {children}
    // </button>

    <button className={`${inverted ? 'inverted' : ''} custom-button`}{...otherProps}>
        {children}
    </button>
)

export default CustomButton;