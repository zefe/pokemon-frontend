import React from 'react';
import { Home } from '../views/Home';



export const AppRouter = () => {
    return (
        <Router>
           <div>
               <Switch>
                    <Route 
                        exact 
                        path="/login" 
                        component={ Home }
                    />
               </Switch>
            </div>    
        </Router>
    )
}
