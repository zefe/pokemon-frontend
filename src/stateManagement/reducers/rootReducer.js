import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonMultipleReducer } from "./pokemonMultipleReducer";


export const rootReducer = combineReducers({
    PokemonList: pokemonListReducer,
    Pokemon: pokemonMultipleReducer
})