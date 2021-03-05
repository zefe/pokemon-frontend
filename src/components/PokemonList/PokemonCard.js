import React from 'react';
import { Link } from 'react-router-dom';


export const PokemonCard = ({ name, url }) => {
    console.log("POKEMON CARD")
    console.log(name, url)
    return (
        <>
            <Link to={ `/pokemon/${ name }` } >
                <div className="card-single">
                    <div className="card-body">
                        
                        <h5>{name}</h5>
                        <h4>001</h4>
                        <div className="card-pokemon">
                            <img src={url} alt="imagen" />
                        </div>
                    </div>
                    <div className="card-footer">
                        <span className="badge success"> Success </span>
                        <span className="badge warning"> Success </span>
                    </div>
                </div>
            
            </Link>
        </>
    )
}
