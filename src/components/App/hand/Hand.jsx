import React from 'react';
import PropTypes from 'prop-types';

const Hand = ({ image }) => (
  <figure>
    <img src={image} />
  </figure>
);

Hand.propTypes = {
  image: PropTypes.string.isRequired
};

export default Hand;
