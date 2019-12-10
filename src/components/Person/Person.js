import React, { Component } from 'react';

import './Person.css';
import SwapiService from '../../services/SwapiService';
import Spinner from '../../UI/Spinner/Spinner'

class Person extends Component {

    swapi = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    updatePerson() {
        this.setState({ loading: true})
        const { personId } = this.props;
        if (!personId) {
            return
        };

        this.swapi.getPerson(personId)
            .then( person => {
                this.setState({ person, loading: false })
            })
    }

    componentDidMount() {
        this.updatePerson()
    };
    
    componentDidUpdate(prevProps) {
        if (prevProps.personId === this.props.personId) {
            return
        };

        this.updatePerson();
    }

    render() {

        if (!this.state.person) {
            return <span> Please, select the Person </span>
        }

        if (this.state.loading) {
            return <Spinner />
        }

        const { id, gender, name, birthYear, eyeColor } = this.state.person;

        return(
            <div className="Person card">
                <img className="person-image" alt="person"
                src={ `https://starwars-visualguide.com/assets/img/characters/${ id }.jpg` } />
        
                <div className="card-body">
                    <h4>{ name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender: </span>
                            <span> { gender } </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year: </span>
                            <span> { birthYear } </span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color: </span>
                            <span> { eyeColor } </span>
                        </li>
                    </ul>
                </div>
          </div>
    
        )
    }
};

export default Person;