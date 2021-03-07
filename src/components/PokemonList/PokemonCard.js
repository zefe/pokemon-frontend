import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { uiShowBtnBack } from '../../stateManagement/actions/pokemonActions';



export const PokemonCard = (props) => {

    const { pokemon } = props;

    const dispatch = useDispatch();

    const handleActiveBackButton = () => {
        dispatch( uiShowBtnBack() );
    };

    return (
        <>
            <Link to={ `/pokemon/${ pokemon.name }` } onClick={handleActiveBackButton} >
                <div className="card-single">
                    <div className="card-body">
                        
                        <h5>{pokemon.name}</h5>
                        <h4>
                            {
                                pokemon.id < 10 ? `00${ pokemon.id }`
                                : pokemon.id < 100 ? `0${ pokemon.id }`
                                : pokemon.id

                            }
                        </h4>
                        <div className="card-pokemon">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt="imagen" />
                            
                        </div>
                    </div>
                    <div className="card-footer">
                        {
                            pokemon.types.map(item => {
                                return(
                                    <span
                                        className={`badge ${ item.type.name }`}
                                        key={ item.type.name }
                                    >
                                        {item.type.name}
                                    </span>)
                            })
                        }
                    </div>
                </div>
            
            </Link>
        </>
    )
}
