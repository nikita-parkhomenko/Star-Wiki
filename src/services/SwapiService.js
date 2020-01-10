class SwapiService {

    _apiBase = 'https://swapi.co/api/';

    getResource = async (url) => {
        const resp = await fetch(`${this._apiBase}${url}`);

        if(!resp.ok) {
            throw new Error(`Could not fetch ${url}`)
        };

        return await resp.json();
    };

    getAllPeople = async () => {
        const resp = await this.getResource(`people/`);
        return resp.results.map(this.transformPerson);
    }
    getPerson = async (id) => {
        const person = await this.getResource(`people/${id}/`);
        return this.transformPerson(person);
    }

    getAllPlanets = async () => {
        const resp = await this.getResource(`planets/`);
        return resp.results.map(this.transformPlanet);
    }
    getPlanet = async (id) => {
        const planet = await this.getResource(`planets/${id}/`);
        return this.transformPlanet(planet)
    }

    getAllStarships = async () => {
        const resp = await this.getResource(`starships/`);
        return resp.results.map(this.transformStarship);
    }
    getStarship = async (id) => {
        const starship = await this.getResource(`starships/${id}/`);
        return this.transformStarship(starship);
    }

    extractId = (item) => {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    transformPlanet = (planet) => {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotation: planet.rotation_period
        }
    }

    transformPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    transformStarship = (starship) => {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers
        }
    }
};

export default SwapiService;
