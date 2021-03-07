import { React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../stateManagement/actions/pokemonActions';
import { PokemonCard } from './PokemonCard';
import ReactPaginate from 'react-paginate';
import { Spinner } from '../Common/Spinner';

export const PokemonList = () => {

    const dispatch = useDispatch();
    const pokemonList  = useSelector(state => state.PokemonList);

    useEffect(() => {

        FetchData(1);

    }, []);


    const FetchData = (page=1) => {
        dispatch( getPokemonList(page)  );
    };

    const ShowData = () => {

        if(pokemonList.loading){
            return (
                <div className="loading">
                    <Spinner />
                </div>
            )
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
}
