import axios from "axios";
import { types } from "../types/pokemonTypes";

export const getPokemonList = () => {
    return async( dispatch ) => {

        try{

            dispatch({
                type: types.POKEMON_LIST_LOADING
            });

            const perPage = 15;
            const offset = (perPage * 15) - perPage;

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

            dispatch({
                type: types.POKEMON_LIST_SUCCESS,
                payload: res.data
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