import React from 'react'

export const NotFound = ({errorMsg}) => {
    return (
        <div className="notfound">
            <h3>{errorMsg}</h3>
        </div>
    )
}
