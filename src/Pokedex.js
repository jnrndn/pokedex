import React from 'react';
import Header from './Header';

class Pokedex extends React.Component {

    apiUrl = 'https://pokeapi.co/api/v2/';

    state = {
        pokemons: {},
    }

    componentDidMount() {
        const endpoint = 'pokemon';

        fetch(`${this.apiUrl}${endpoint}`)
            .then(res => res.json())
            .then((data) => {
                data.results.map((pokemonData) => this.fetchAndSavePokemonData(pokemonData));
            })
            .catch(console.error)
    }

    fetchAndSavePokemonData = (pokemonData) =>{
        fetch(pokemonData.url)
            .then(res => res.json())
            .then((pokemon) => {
                const pokemons = { ...this.state.pokemons};
                pokemons[pokemonData.name] = pokemon;
                this.setState({pokemons});
            })
            .catch(console.error)
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Pokedex;