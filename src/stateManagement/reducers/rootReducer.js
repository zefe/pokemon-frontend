import { combineReducers } from "redux";
import { pokemonListReducer } from "./pokemonListReducer";
import { pokemonDetailsReducer } from "./pokemonDetailsReducer";
import { uiReducer } from "./uiReducer";


export const rootReducer = combineReducers({
    PokemonList: pokemonListReducer,
    Pokemon: pokemonDetailsReducer,
    ui: uiReducer,
})