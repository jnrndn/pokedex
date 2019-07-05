import React from 'react';
import Header from './Header';
import PokeCard from './PokeCard';

class Pokedex extends React.Component {

    apiUrl = 'https://pokeapi.co/api/v2/';

    state = {
        pokemons: {},
    }

    componentDidMount() {
        const endpoint = 'pokemon?limit=50';

        fetch(`${this.apiUrl}${endpoint}`)
            .then(res => res.json())
            .then((data) => {
                data.results.map((pokemonData) => this.fetchAndSavePokemonData(pokemonData));
            })
            .catch(console.error)
    }

    fetchAndSavePokemonData = (pokemonData) => {
        fetch(pokemonData.url)
            .then(res => res.json())
            .then((pokemon) => {
                const pokemons = { ...this.state.pokemons };
                pokemons[ pokemonData.name ] = pokemon;
                this.setState({ pokemons });
            })
            .catch(console.error)
    }

    showDetails = (event) => {
        event.preventDefault();
        console.log(event);


        // this.props.history.push(`/details/${q}`);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="card-container">
                    {
                        Object.keys(this.state.pokemons).map((key) => (
                            <PokeCard
                                key={key}
                                id={this.state.pokemons[ key ].id}
                                pokemon={this.state.pokemons[ key ]}
                                showDetails={this.showDetails}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Pokedex;