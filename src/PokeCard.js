import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const headerStyle = {
    'text-align': 'center',
    'text-transform': 'capitalize'
};

const PokeCard = (props) => (
    <Card className="card">
        <CardHeader style={headerStyle}
            title={props.pokemon.name}
        />
        <CardMedia
            component="img"
            alt={props.pokemon.name}
            height="170px"
            image={props.pokemon.sprites.front_default}
            title={props.pokemon.name}
        />
        <CardContent>
            {
                Object.values(props.pokemon.types).map((types) => (
                    <Typography
                        key={`${props.pokemon.name}-${types.type.name}`}
                        variant="body2"
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

export default PokeCard;