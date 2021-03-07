import axios from "axios";
import { types } from "../types/pokemonTypes";

export const getPokemonList = (page) => {
    return async( dispatch ) => {

        try{

            dispatch({
                type: types.POKEMON_LIST_LOADING
            });

            const perPage = 25;
            const offset = (page * perPage) - perPage;

            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

            const count = res.data.count ;

            const promises = res.data.results.map( async(pokemon) => {
                return await axios.get(`${pokemon.url}`)
            });

            const results = await Promise.all(promises);

            let pokemonData = results.map((pokemon) => {
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

export const filterByValue = (value) => {
    return async(dispatch, getSate) => {

        try {

            let { data } = getSate().PokemonList;

            const payload = getPokemonByName(value, data)

            dispatch({
                type: types.FILTER_BY_VALUE,
                payload
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}

export const uiShowBtnBack = () => ({
    type: types.UI_SHOW_BTN_BACK
});

export const uiHideBtnBack = () => ({
    type: types.UI_HIDE_BTN_BACK
});



const getPokemonByName = (pokemonName='', data) => {

    if(pokemonName === '') {
        return [];
    }
    pokemonName.toLocaleLowerCase();
    return data.filter( pokemon => pokemon.name.toLocaleLowerCase().includes( pokemonName) ||
    pokemon.id.toString().includes(pokemonName) );
}
