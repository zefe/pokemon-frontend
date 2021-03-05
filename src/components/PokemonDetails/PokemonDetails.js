import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import avatar from '../../assets/images/avatar.png';
import { getPokemon } from '../../stateManagement/actions/pokemonActions';


export const PokemonDetails = ({ history }) => {


    const { pokemonName } = useParams();
    
    const dispatch = useDispatch();

    const pokemonState = useSelector(state => state.Pokemon);

    const pokemon = pokemonState.data[pokemonName];

    useEffect( ()=> {
        dispatch(getPokemon(pokemonName))
    }, []);

    const ShowData = () => {

        if(pokemonState.data[pokemonName] !== undefined || pokemonState.errorMessage !== ""){

            return (
                <div className="pokemon-details">
                    <div className="card-single-left">
                        <div className="card-body-details">
                            <div className="card-pokemon-details">
                                <img src={avatar} alt="imagen" />
                            </div>
                        </div>
                        <div className="card-footer-details">
                            <img src={ pokemon.sprites.front_default } alt={pokemonName} ></img>
                            <img src={ pokemon.sprites.back_default } alt={pokemonName} ></img>
                        </div>
                    </div>
                    <div className="card-single-right">
                        <div className="card-header-details">
                            <h2>{ pokemonName }</h2>
                            <div className="badge-details">
                                {
                                    pokemon.types.map(item => {
                                        return (

                                            (item.type.name === 'grass') ? <span className="badge-details success"> {item.type.name} </span> 
                                            :
                                            <span className="badge-details warning"> {item.type.name} </span>
                                            
                                        )
                                    })
                                }         
                                
                            </div>
                        </div>
                        <div className="card-body-details">
                            <h4>Pokedex Number</h4>
                            <p>{ pokemon.id }</p>
                            <hr />
                        </div>
                        <div className="card-body-details">
                            <h4>Height</h4>
                            <p>{ pokemon.height }</p>
                            <hr />
                        </div>
                        <div className="card-body-details">
                            <h4>Weight</h4>
                            <p>{ pokemon.weight }</p>
                            <hr />
                        </div>
                        <div className="card-body-details">
                            <h4>Shiny</h4>
                            <div className="card-footer-details-right">
                                <img src={ pokemon.sprites.front_shiny }alt={pokemonName} ></img>
                                <img src={ pokemon.sprites.back_shiny } alt={pokemonName} ></img>
                            </div>
                        </div>
                    </div>
                </div>
            )

        };

        if(pokemonState.loading){
            return (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            )
        }

        if(pokemonState.errorMessage !== "") {
            return (
                <p>{ pokemonState.errorMessage }</p>
            )
        }

        return (<p>Unable data</p>)

    }

    console.log(pokemonState.data[pokemonName])

    return (
        <main>
            {ShowData()}
        </main>
    )
}
