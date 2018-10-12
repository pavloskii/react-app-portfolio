import React from 'react';
import { Animation } from './styles';

const Loader = () => {
    return (
        <Animation>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </Animation>
    )
}

export default Loader;