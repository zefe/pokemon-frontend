import { React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../stateManagement/actions/pokemonActions';
import { PokemonCard } from './PokemonCard';

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
                    <h3>Loading...</h3>
                </div>
            )
        }

        if(pokemonList.data.length !== 0){

            return pokemonList.data.map(pokemon => (
                <PokemonCard
                    pokemon={pokemon}
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
        </main>
    )
}
