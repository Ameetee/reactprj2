// src/PlayersList.js

import React from 'react';
import Player from './player';
import players from './players';

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </div>
  );
};

export default PlayersList;
