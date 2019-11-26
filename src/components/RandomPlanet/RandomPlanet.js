import React, { Component } from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';

class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        planet: {}
    };

    componentDidMount() {
        let id = Math.floor(Math.random() * 20 + 2)
        this.swapi.getPlanet(id)
            .then(planet => {
                this.setState({ planet })
            })
    }

    render() {
        return(
            <div className="RandomPlanet jumbotron rounded">
                <img className="planet-image" alt="planet"
                    src={ `https://starwars-visualguide.com/assets/img/planets/${ this.state.planet.id }.jpg` } />
                <div>
                    <h4>{ this.state.planet.name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ this.state.planet.population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ this.state.planet.rotation }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ this.state.planet.diameter }</span>
                        </li>
                    </ul>
                </div>
          </div>
            )
    }
};

export default RandomPlanet;