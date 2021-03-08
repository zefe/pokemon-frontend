import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Spinner } from '../Common/Spinner';
import { useHistory } from 'react-router-dom';
import { uiHideBtnBack, uiShowBtnBack, getPokemon } from '../../stateManagement/actions/pokemonActions';

import searchIcon from '../../assets/icons/Search.svg';
import back from '../../assets/icons/Back.svg';


export const PokemonDetails = () => {

    const { pokemonName } = useParams();

    const [searchText, setSearchText] = useState('');
    
    const dispatch = useDispatch();

    const pokemonState = useSelector(state => state.Pokemon);

    const { btnBack } = useSelector(state => state.ui);
    const history = useHistory();

    const pokemon = pokemonState.data[pokemonName];

    useEffect( ()=> {
        dispatch( getPokemon(pokemonName) )
    }, [dispatch, pokemonName]);

        
    const handleShowBtn = () => {

        dispatch( uiHideBtnBack() );

        if( history.length >= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
        
    }

    const searchById = () => {

        dispatch( getPokemon(searchText) );
        history.push(`/pokemon/${searchText}`);
        dispatch( uiShowBtnBack() );

    }

    const ShowData = () => {

        if(pokemonState.data[pokemonName] !== undefined || pokemonState.errorMessage !== ""){

            return (
                <>
                    <div className="search-pokemon">
                        <div className="search-container">
                            <div className="back-button" >
                                {
                                    btnBack && 
                                    <div className="back-btn">
                                        <img src={back} alt="imagen" onClick={ handleShowBtn } />
                                    </div>
                                }
                            </div>
                            <div className="search-wrapper-detail" >
                                <form>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="search-input-detail"
                                        name="searchText"
                                        value={ searchText }
                                        onChange={ e => setSearchText(e.target.value) }
                                        required
                                    />
                                    <div className="search-button" onClick={ searchById } >
                                        <img src={searchIcon} alt="imagen" />
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="pokemon-details">
                        <div className="card-single-left">
                            <div className="card-body-details">
                                <div className="card-pokemon-details">
                                    <img src={pokemon.sprites.other.dream_world.front_default} alt="imagen" />
                                </div>
                            </div>
                            <div className="card-footer-details">
                                <img src={ pokemon.sprites.front_default } alt={pokemonName} ></img>
                                <img src={ pokemon.sprites.back_default } alt={pokemonName} ></img>
                            </div>
                        </div>
                        <div className="card-single-right">
                            <div className="card-header-details">
                                <h2>{ pokemon.name }</h2>
                                <div className="badge-details">

                                    {
                                        pokemon.types.map(item => {
                                            return (
                                                <span 
                                                    className={`badge ${ item.type.name }` }
                                                    key={item.type.name}
                                                > {item.type.name} </span>  
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
                </>
            )

        };

        if(pokemonState.loading){
            return (
                <div className="loading">
                    <Spinner />
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

    return (
        <main>
            {ShowData()}
        </main>
    )
};
