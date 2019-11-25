import React from 'react';

import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemsList from '../ItemsList/ItemsList';
import Person from '../Person/Person';

const App = () => {

        return(
            <div className="App">
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList />
                    </div>
                    <div className="col-md-6">
                        <Person />
                    </div>
                </div>

            </div>
        )
};

export default App;