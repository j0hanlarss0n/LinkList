import React, { useState } from 'react';
import PropTypes from 'prop-types';


function CountButton4({ num }) {

    const [count, setCount] = useState(num);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

CountButton4.propTypes = {
    num: PropTypes.number.isRequired,
}

export default CountButton4