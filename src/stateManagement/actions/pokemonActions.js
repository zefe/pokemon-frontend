import axios from "axios";
import { types } from "../types/pokemonTypes";

export const getPokemonList = (page) => {
    return async( dispatch ) => {

        try{

            dispatch({
                type: types.POKEMON_LIST_LOADING
            });

            const perPage = 20;
            const offset = (page * perPage) - perPage;

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);
            const count = res.data.count;

            const pokemonList = res.data.results;

            //Multiples promesas en paralelo, donde cada elemento del array sea una promesa
            const promises = pokemonList.map( async(pokemon) => {
                let url = pokemon.url.substring(0, pokemon.url.length - 1);
                return await axios.get(url);
            });

            const pokemones = await Promise.all(promises);

            let pokemonData = pokemones.map((pokemon) => {
                return pokemon.data;
            })

            dispatch({
                type: types.POKEMON_LIST_SUCCESS,
                payload: { pokemonData, count }
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
                type: types.POKEMON_DETAILS_LOADING
            });

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

            dispatch({
                type: types.POKEMON_DETAILS_SUCCESS,
                payload: res.data,
                pokemonName: pokemon
            });


        }
        catch(e){
            dispatch({
                type: types.POKEMON_DETAILS_FAIL
            });
            console.log(e);
        }

    }
}

export const uiShowBtnBack = () => ({
    type: types.UI_SHOW_BTN_BACK
});

export const uiHideBtnBack = () => ({
    type: types.UI_HIDE_BTN_BACK
});
