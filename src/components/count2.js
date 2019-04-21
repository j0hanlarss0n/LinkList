import React from 'react';
import PropTypes from 'prop-types';

const count2button = (props) => (
    <button>
        {props.num}
    </button>
);

count2button.propTypes = {
    num: PropTypes.number.isRequired,
}

export default count2button