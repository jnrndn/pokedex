import React from 'react';
import Header from './Header';
import PokeCard from './PokeCard';
import { debounce } from 'lodash';

class Pokedex extends React.Component {

    apiUrl = 'https://pokeapi.co/api/v2/';

    state = {
        pokemons: {},
        next: '',
    }

    componentDidMount() {
        window.onscroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop
                === document.documentElement.offsetHeight
            ) {
                const foo = this.state.next.split('?');
                const endpoint = foo[ 1 ];
                this.loadPokemons(`pokemon?${endpoint}`);
            }
        }, 100);
    }

    componentWillMount() {
        this.loadPokemons();
    }

    loadPokemons = (endpoint) => {
        endpoint = endpoint || 'pokemon?';
        fetch(`${this.apiUrl}${endpoint}`)
            .then(res => res.json())
            .then((data) => {
                data.results.map((pokemonData) => this.fetchAndSavePokemonData(pokemonData));
                this.setState({ next: data.next })
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

    showDetails = (id) => {
        this.props.history.push(`/details/${id}`);
    }

    render() {
        return (
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
        );
    }
}

export default Pokedex;