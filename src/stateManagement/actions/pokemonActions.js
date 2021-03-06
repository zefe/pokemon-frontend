import axios from "axios";
import { types } from "../types/pokemonTypes";

export const getPokemonList = (page) => {
    return async( dispatch ) => {

        try{

            dispatch({
                type: types.POKEMON_LIST_LOADING
            });

            const perPage = 15;
            const offset = (page * perPage) - perPage;

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

            const promises = res.data.results.map( async(pokemon) => {
                return await axios.get(`${pokemon.url}`)
            });

            const results = await Promise.all(promises);

            let pokemonData = results.map((pokemon) => {
                return pokemon.data;
            })

            dispatch({
                type: types.POKEMON_LIST_SUCCESS,
                payload: pokemonData
            });

        }
        catch(e){
            dispatch({
                type: types.POKEMON_LIST_FAIL
            });
            console.log(e);
        }

    }
}

export const getPokemon = (pokemon) => {
    return async( dispatch ) => {
        try{

            dispatch({
                type: types.POKEMON_MULTIPLE_LOADING
            });

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

            dispatch({
                type: types.POKEMON_MULTIPLE_SUCCESS,
                payload: res.data,
                pokemonName: pokemon
            });

        }
        catch(e){
            dispatch({
                type: types.POKEMON_MULTIPLE_FAIL
            });
            console.log(e);
        }

    }
}