import React from 'react';
import PropTypes from 'prop-types';
import Hand from '../Hand';
import PlayerChoices from '../player/PlayerChoices';

const PlayerHand = ({ playerHand }) => (
  <section>
    <Hand image={playerHand.image} />
    <PlayerChoices />
  </section>
);

PlayerHand.propTypes = {
  playerHand: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  })
};

export default PlayerHand;
