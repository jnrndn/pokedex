import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const headerStyle = {
    'text-align': 'center',
    'text-transform': 'capitalize'
};

class PokeCard extends React.Component {

    getId = () => {
        this.props.showDetails(this.props.id);
    }

    render() {
        return (
            <Card className="card" onClick={this.getId}>
                <CardHeader style={headerStyle}
                    title={this.props.pokemon.name}
                />
                <CardMedia
                    component="img"
                    alt={this.props.pokemon.name}
                    height="170px"
                    image={this.props.pokemon.sprites.front_default}
                    title={this.props.pokemon.name}
                />
                <CardContent>
                    {
                        Object.values(this.props.pokemon.types).map((types) => (
                            <Typography
                                key={`${this.props.pokemon.name}-${types.type.name}`}
                                variant="body1"
                                color="textSecondary"
                                component="p"
                            >
                                {types.type.name}
                            </Typography>
                        ))
                    }
                </CardContent>
            </Card>
        );
    }
};

export default PokeCard;