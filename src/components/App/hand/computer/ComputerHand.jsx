import React from 'react';
import PropTypes from 'prop-types';
import Hand from '../Hand';

const ComputerHand = ({ computerHand }) => (
  <section>
    <Hand image={computerHand.image} />
    <span>Computer Throw: {computerHand.name}</span>
  </section>
);

ComputerHand.propTypes = {
  computerHand: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string.isRequired
  })
};

export default ComputerHand;
