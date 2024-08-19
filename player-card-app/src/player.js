// src/Player.js

import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

// Define the Player component
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Define default props
Player.defaultProps = {
  name: 'Unknown Player',
  team: 'Unknown Team',
  nationality: 'Unknown',
  jerseyNumber: 'N/A',
  age: 'N/A',
  image: 'https://via.placeholder.com/150?text=No+Image'
};

// Define prop types
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  image: PropTypes.string
};

export default Player;
