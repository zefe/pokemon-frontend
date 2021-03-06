import { types } from "../types/pokemonTypes";

const initialState = {
    loading: false,
    data: {},
    errorMessage: ""
};

export const pokemonMultipleReducer = (state = initialState, action) => {

        switch (action.type) {
            case types.POKEMON_MULTIPLE_LOADING:
                return {
                    ...state,
                    loading: true,
                    errorMessage: ""
                }
            case types.POKEMON_MULTIPLE_FAIL:
                return {
                    ...state,
                    loading: false,
                    errorMessage: "Pokemon not found"
                }
            case types.POKEMON_MULTIPLE_SUCCESS:
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

