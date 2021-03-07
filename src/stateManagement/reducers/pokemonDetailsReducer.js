import { types } from "../types/pokemonTypes";

const initialState = {
    loading: false,
    data: {},
    errorMessage: ""
};

export const pokemonDetailsReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.POKEMON_DETAILS_LOADING:
                return {
                    ...state,
                    loading: true,
                    errorMessage: ""
                }
            case types.POKEMON_DETAILS_FAIL:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "Pokemon not found"
                }
            case types.POKEMON_DETAILS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "",
                    data: {
                        ...state.data,
                        [action.pokemonName]: action.payload
                    }
                }
                
        
            default:
                return state;
        }
};

