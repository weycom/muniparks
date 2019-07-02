import React from 'react';
import PropTypes from 'prop-types';

function MLogo ({ className, fill }) {
  return (
  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1222.7 248.7" className={className}>
		<text transform="translate(285.015 188.297)" font-size="200" font-family="Avenir-Medium">
	    Muniparks
	 	</text>
		<circle cx="119.2" cy="118.2" r="116.7"/>
	</svg>
  );
}

MLogo.propTypes = {
  className: PropTypes.string,
  fill: PropTypes.string,
};

MLogo.defaultProps = {
  className: undefined,
  fill: '#000',
};

export default MLogo;