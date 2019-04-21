import React, { useState } from 'react';

function Section() {
    const [name, setName] = useState('Test');
    const [count, setCount] = useState(0);
    //setName('testing');
    return (
        <div>
            <h1>
                Section {name}
            </h1>
            <button onClick={() => { setCount(count + 1); setName('ny') }}>
                {count}
            </button>
        </div>
    );
}

export default Section