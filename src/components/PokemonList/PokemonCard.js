import React from 'react';
import { NavLink } from 'react-router-dom';


export const PokemonCard = (props) => {

    const { pokemon } = props;

    return (
        <>
            <NavLink to={ `/pokemon/${ pokemon.name }` } >
                <div className="card-single">
                    <div className="card-body">
                        
                        <h5>{pokemon.name}</h5>
                        <h4>001</h4>
                        <div className="card-pokemon">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt="imagen" />
                            
                        </div>
                    </div>
                    <div className="card-footer">
                        {
                            pokemon.types.map(item => {
                                return(
                                    <span className={`badge ${ item.type.name }`}> {item.type.name} </span>)
                            })
                        }
                    </div>
                </div>
            
            </NavLink>
        </>
    )
}
