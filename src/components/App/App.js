import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemsList from '../ItemsList/ItemsList';
import Person from '../Person/Person';
import SwapiService from '../../services/SwapiService'

class App extends Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null
    }

    onItemSelected = (id) => {
        this.setState({ selectedPerson: id })
    }

    render() {
        return(
            <div className="App">
                <Header />
                <RandomPlanet />
    
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList onItemSelected={this.onItemSelected}
                            getData={ this.swapi.getAllPeople } />
                    </div>
                    <div className="col-md-6">
                        <Person personId={this.state.selectedPerson} />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemsList onItemSelected={this.onItemSelected}
                            getData={ this.swapi.getAllPlanets } />
                    </div>
                    <div className="col-md-6">
                        <Person personId={this.state.selectedPerson} />
                    </div>
                </div>
    
            </div>
        );
    }

};

export default App;