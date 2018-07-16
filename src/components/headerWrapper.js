import React, { Component } from 'react';
import HeaderBar from './headerBar'

class HeaderWrapper extends Component{
    render() {
        return [
            <div classname='header-wrapper'>
                <h1 className='header-wrapper__title'>Welcome to HOA Manager!</h1>
                <p className='header-wrapper__subtitle'>Please login to continue</p>
                {this.props.children}
            </div>,
            HeaderBar()
        ]
    }
}

export default HeaderWrapper;