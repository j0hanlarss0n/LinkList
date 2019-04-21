import React from 'react';
import CountButton from './CountButton';
import Section from './Section';
import Count2button from './count2';
import CountButton3 from './count3';

export default function App() {
    return (
        <div>
            This is a sample stateful and
            server-side rendered React application.
            <br /><br />
            Here is a button that will track how many times you click it:
            <br /><br />
            <CountButton />
            <Section />
            <Count2button num={7} />
            <CountButton3 num={7} />
        </div>
    );
}