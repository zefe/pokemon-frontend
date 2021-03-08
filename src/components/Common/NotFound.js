import React from 'react';

export const NotFound = ({errorMsg}) => {
    return (
        <div className="notfound-container">
            <h2>{errorMsg}</h2>
        </div>
    )
}
