import  {React, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { uiHideBtnBack, uiShowBtnBack, getPokemon } from '../../stateManagement/actions/pokemonActions';
import searchIcon from '../../assets/icons/Search.svg';
import back from '../../assets/icons/Back.svg';


export const Header = () => {

    const [searchText, setSearchText] = useState('');

    const dispatch = useDispatch();
    const { btnBack } = useSelector(state => state.ui);

    const history = useHistory();
    
    const handleShowBtn = () => {

        setSearchText('');
        dispatch( uiHideBtnBack() );

        if( history.length >= 2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
        
    }

    const searchPokemon = () => {

        dispatch( getPokemon(searchText) );
        history.push(`/pokemon/${searchText}`);
        dispatch( uiShowBtnBack() );

    }

    return (
        <header>
            <div className="btn-back-icon">
                {
                    btnBack && 
                    <div className="back-btn">
                        <img src={back} alt="imagen" onClick={ handleShowBtn } />
                    </div>
                }
            </div>
            <div className="search-wrapper"> 
                <input type="text"
                    name="searchText"
                    className="search-input"
                    placeholder="Search"
                    value={ searchText }
                    onChange={e => setSearchText(e.target.value)}
                />
                <div className="search-btn" onClick={ searchPokemon }>
                    <img src={searchIcon} alt="imagen" />
                </div>
            </div> 
        </header>
    )
}
