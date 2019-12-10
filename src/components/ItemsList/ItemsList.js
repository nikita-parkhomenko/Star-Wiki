import React, { Component } from 'react';

import './ItemsList.css';
import SwapiService from '../../services/SwapiService'
import Spinner from '../../UI/Spinner/Spinner'

class ItemsList extends Component {

    swapi = new SwapiService();

    state = {
        persons: null
    }

    componentDidMount() {
        this.swapi.getAllPeople()
            .then( people => {
                this.setState({ persons: people })
            })
            .catch( err => console.log(err))
    }

    render() {

        if (!this.state.persons) {
            return <Spinner />
        }

        const personsList = this.state.persons.map( person => {
            return <li onClick={() => this.props.onItemSelected(person.id)}
             key={person.id} className="list-group-item"> { person.name } </li> ;
        })

        return(
            <ul className="ItemsList list-group">
                { personsList }
            </ul>
    
        )
    }
};

export default ItemsList;