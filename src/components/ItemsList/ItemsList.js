import React, { Component } from 'react';

import './ItemsList.css';
import Spinner from '../../UI/Spinner/Spinner'

class ItemsList extends Component {

    state = {
        itemsList: null
    }

    componentDidMount() {

        const { getData } = this.props;

        getData()
            .then( item => {
                this.setState({ itemsList: item })
            })
            .catch( err => console.log(err))
    }

    render() {

        if (!this.state.itemsList) {
            return <Spinner />
        }

        const itemsList = this.state.itemsList.map( item => {
            return <li onClick={() => this.props.onItemSelected(item.id)}
             key={item.id} className="list-group-item"> { item.name } </li> ;
        })

        return(
            <ul className="ItemsList list-group">
                { itemsList }
            </ul>
    
        )
    }
};

export default ItemsList;