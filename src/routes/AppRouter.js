import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../components/Layout/Layout';
import { HomeView } from '../views/HomeView';
import { PokemonView } from '../views/PokemonView';


export const AppRouter = () => {
    return (
        <Router>
           <Layout>
               <Switch>
                    <Route 
                        exact 
                        path="/" 
                        component={ HomeView }
                    />
                    <Route 
                        exact 
                        path="/pokemon/:pokemonName" 
                        component={ PokemonView }
                    />
                    <Redirect to="/" />
               </Switch>
            </Layout>    
        </Router>
    )
}
