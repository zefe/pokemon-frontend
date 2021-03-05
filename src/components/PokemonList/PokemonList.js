import { React, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../stateManagement/actions/pokemonActions';
import { PokemonCard } from './PokemonCard';

export const PokemonList = () => {

    const dispatch = useDispatch();
    const pokemonList  = useSelector(state => state.PokemonList);

    useEffect(() => {

        FetchData(1);

    }, [])


    const FetchData = (page) => {
        dispatch( getPokemonList(page)  );
    }

    
    console.log("pokemonList")
    console.log(pokemonList)

    console.log(pokemonList.data.length !== 0)

    const ShowData = () => {

        if(pokemonList.data.length !== 0){

            return pokemonList.data.map(pokemon => (
                <PokemonCard
                    { ...pokemon }
                />
            ))

        }

        if(pokemonList.loading){
            return (
                <div className="loading">
                    <h3>Loading...</h3>
                </div>
            )
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
