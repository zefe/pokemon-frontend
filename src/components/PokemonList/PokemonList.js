import { React, useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList, uiHideBtnBack } from '../../stateManagement/actions/pokemonActions';
import { PokemonCard } from './PokemonCard';
import ReactPaginate from 'react-paginate';
import { Spinner } from '../Common/Spinner';
import { useForm } from '../../Hooks/useForm';
import { useHistory, useLocation } from 'react-router-dom';

import searchIcon from '../../assets/icons/Search.svg';
import back from '../../assets/icons/Back.svg';

export const PokemonList = () => {

    const dispatch = useDispatch();
    const { btnBack } = useSelector(state => state.ui);

    const history = useHistory();
    const location = useLocation();
    const { q='' } = queryString.parse( location.search );

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    const pokemonList  = useSelector(state => state.PokemonList);

    useEffect(() => {
        FetchData(1);
    }, []);


    const FetchData = (page=1) => {
        dispatch( getPokemonList(page)  );
    };

    const data = pokemonList.data;

    const getPokemonByName = (pokemonName='') => {

        if(pokemonName === '') {
            return [];
        }
        pokemonName.toLocaleLowerCase();
        return data.filter( pokemon => pokemon.name.toLocaleLowerCase().includes( pokemonName) ||
        pokemon.id.toString().includes(pokemonName) );
    }

    const pokemonFiltered = getPokemonByName( searchText );

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
    }

    const handleShowBtn = () => {
        console.log("Retorname ")
    }

    if(btnBack) {
        dispatch( uiHideBtnBack() );
    }

    const ShowData = () => {
 
        if(pokemonFiltered.length !== 0){

            return pokemonFiltered.map( (pokemon) => (
                <PokemonCard
                    pokemon={ pokemon }
                    key={ pokemon.id }
                />
            ))

        }
        
        if(pokemonList.data.length !== 0){

            return pokemonList.data.map( (pokemon) => (
                <PokemonCard
                    pokemon={ pokemon }
                    key={ pokemon.id }
                />
            ))

        }

        if(pokemonList.errorMessage !== "") {
            return <p>{pokemonList.errorMessage}</p>
        }

        return (<p>Unable data</p>)

    }

    return (
        <main>
            {
                (q !=='' && pokemonFiltered.length === 0) && 
                <div className="notfound">
                    <p>Not found {q}</p>
                </div>
                
            }
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
                    <div className="search-wrapper" >
                        <form onSubmit={ handleSearch } >
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-input"
                                name="searchText"
                                value={ searchText }
                                onChange={ handleInputChange }
                                required
                            />
                            <button className="search-button" >
                                <img src={searchIcon} alt="imagen" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            {
                pokemonList.loading &&
                <div className="loading">
                    <Spinner />
                </div>
            }
            <div className="home-cards">
                {ShowData()}
            </div>
                
            <div className="pagination-content">
                <ReactPaginate 
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={ 2 }
                    marginPagesDisplayed={ 1 }
                    onPageChange={ (data) => FetchData(data.selected + 1)}
                    containerClassName={"pagination"}
                    pageLinkClassName={"pagination-link"}
                    activeClassName={"pagination-active-link"}
                    nextClassName={"pagination-next-link"}
                    previousClassName={"pagination-previous-link"}
                />
            </div>
        </main>
    )
};
