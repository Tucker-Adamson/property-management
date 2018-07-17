import React from 'react';
import HeaderBar from './headerBar';

export function Header() {
        return (
            <div classname='header'>
                <h1 className='header__title'>Welcome to HOA Manager!</h1>
                <p className='header__subtitle'>Please login to continue</p>
                {HeaderBar()}
                {this.props.children}
            </div>
        )
    }

export function HeaderBar() {
    return (
        <div className='bar'></div>
    )
}