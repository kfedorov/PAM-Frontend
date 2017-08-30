import PropTypes from "prop-types";

export const playerType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const partyType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  players: PropTypes.arrayOf(playerType).isRequired,
});
