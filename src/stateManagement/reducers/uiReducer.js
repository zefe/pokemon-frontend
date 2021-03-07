import { types } from '../types/pokemonTypes';

const initialState = {
    btnBack: false
};

export const uiReducer = ( state = initialState, action) => {

    switch (action.type) {

        case types.UI_SHOW_BTN_BACK:
            return {
                ...state,
                btnBack: true
            }
            
        case types.UI_HIDE_BTN_BACK:
            return {
                ...state,
                btnBack: false
            }

    
        default:
            return state;
    }
}