import React, { Component } from 'react';

import './ItemsList.css';

class ItemsList extends Component {

    render() {
        return(
            <ul className="ItemsList list-group">
                <li className="list-group-item">
                    Luke Skywalker
                </li>
                <li className="list-group-item">
                    Darth Vader
                </li>
                <li className="list-group-item">
                    R2-D2
                </li>
          </ul>
    
        )
    }
};

export default ItemsList;