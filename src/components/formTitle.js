import React from 'react';

export function FormTitle(props) {
    const { className, text } = props;
        return (
            <h1 classname={`${className} from-title`}>{text}</h1>
        )
    }