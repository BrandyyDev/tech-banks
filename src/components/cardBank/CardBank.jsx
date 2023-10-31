import React from 'react'
import PropTypes from 'prop-types';
import { Card, CardDescription, CardImage } from './cardBank.styles'

const CardBank = ({item}) => {
    return (
        <Card>
            <CardImage src={item?.url} alt={`Logo de ${item?.bankName}`} />
            <h2>{item?.bankName}</h2>
            <CardDescription>{item?.description}</CardDescription>
        </Card>
    )
}

CardBank.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        bankName: PropTypes.string,
        description: PropTypes.string
    })
};

export default CardBank