class SwapiService {

    _apiBase = 'https://swapi.co/api/';

    async getResource(url) {
        const resp = await fetch(`${this._apiBase}${url}`);

        if(!resp.ok) {
            throw new Error(`Could not fetch ${url}`)
        };

        return await resp.json();
    };

    async getAllPeople() {
        const resp = await this.getResource(`people/`);
        return resp.results.map(this.transformPerson);
    }
    async getPerson(id) {
        const person = await this.getResource(`people/${id}/`);
        return this.transformPerson(person);
    }

    async getAllPlanets() {
        const resp = await this.getResource(`planets/`);
        return resp.results.map(this.transformPlanet);
    }
    async getPlanet(id) {
        const planet = await this.getResource(`planets/${id}/`);
        return this.transformPlanet(planet)
    }

    async getAllStarships() {
        const resp = await this.getResource(`starships/`);
        return resp.results.map(this.transformStarship);
    }
    async getStarship(id) {
        const starship = await this.getResource(`starships/${id}/`);
        return this.transformStarship(starship);
    }

    extractId(item) {
        const regExp = /\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }

    transformPlanet(planet) {
        return {
            id: this.extractId(planet),
            name: planet.name,
            population: planet.population,
            diameter: planet.diameter,
            rotation: planet.rotation_period
        }
    }

    transformPerson(person) {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    transformStarship(starship) {
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
