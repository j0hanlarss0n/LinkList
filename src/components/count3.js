
import React, { useState } from 'react';
import PropTypes from 'prop-types';


function CountButton3({ num }) {

    const [count, setCount] = useState(num);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

CountButton3.propTypes = {
    num: PropTypes.number.isRequired,
}

export default CountButton3