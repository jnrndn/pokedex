import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

const PokeCard = (props) => (
    <Card className="card">
        <CardHeader
            title={props.pokemon.name}
        />
        <CardMedia
            component="img"
            alt={props.pokemon.name}
            width="140px"
            image={props.pokemon.sprites.front_default}
            title={props.pokemon.name}
        />
        <CardContent>
            {
                Object.keys(props.pokemon.types).map((type) => (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {type.name}
                    </Typography>
                ))
            }
        </CardContent>
    </Card>
);


export default PokeCard;