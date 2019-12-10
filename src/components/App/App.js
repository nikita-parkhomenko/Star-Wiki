import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ItemsList from '../ItemsList/ItemsList';
import Person from '../Person/Person';

class App extends Component {

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
                        <ItemsList onItemSelected={this.onItemSelected} />
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