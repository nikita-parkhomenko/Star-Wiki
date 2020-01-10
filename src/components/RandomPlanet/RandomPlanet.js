import React, { Component } from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';
import Spinner from '../../UI/Spinner/Spinner';
import PlanetView from './PlanetView';
import ErrorIndicator from '../../UI/ErrorIndicator/ErrorIndicator';

class RandomPlanet extends Component {

    swapi = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onError = (error) => {
        this.setState({ error: true, loading: false })
    }
    updatePlanet = () => {
        // let id = 9000;
        let id = Math.floor(Math.random() * 20 + 2)
        this.swapi.getPlanet(id)
            .then(planet => {
                this.setState({ planet, loading: false })
            })
            .catch(this.onError)
    }

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 5000);
    }

    render() {

        const errorMsg = this.state.error ? <ErrorIndicator /> : null;
        const spinner = this.state.loading ? <Spinner /> : null;
        const planet = !this.state.loading && !this.state.error ? <PlanetView planet={this.state.planet} /> : null;

        return(
            <div className="RandomPlanet jumbotron rounded">
                { spinner }
                { planet }
                { errorMsg }
            </div>
            )
    }
};

export default RandomPlanet;

