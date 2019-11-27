import React from 'react';

const PlanetView = ({ planet }) => {

    return(
        <React.Fragment>
                <img className="planet-image" alt="planet"
                    src={ `https://starwars-visualguide.com/assets/img/planets/${ planet.id }.jpg` } />
                <div>
                    <h4>{ planet.name }</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{ planet.population }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{ planet.rotation }</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{ planet.diameter }</span>
                        </li>
                    </ul>
                </div>
        </React.Fragment>
    )
};

export default PlanetView;