import { types } from "../types/pokemonTypes";


const initialState = {
    loading: false,
    data: [],
    errorMessage: "",
    count:0
};

export const pokemonListReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.POKEMON_LIST_LOADING:
                return {
                    ...state,
                    loading: true,
                    errorMessage:""
                }
            case types.POKEMON_LIST_FAIL:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "Unable to get pokemon"
                }
            case types.POKEMON_LIST_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    data: action.payload.pokemonData,
                    errorMessage: "",
                    count: action.payload.count
                }
        
            default:
                return state;
        }
};
