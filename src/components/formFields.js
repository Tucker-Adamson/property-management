import React, { Component } from 'react';

    export class FormInput extends Component {
        render() {
            const { className, title, input, type } = this.props
            return(
                <div classname='form-input'>
                    <label classname='form-input__title'>{title}</label>
                    <input 
                        className={`${className} form-input__input`}
                        type={type}
                        {...input}
                        placeholder={placeholder}
                        />
                </div>
            )}
        }
    
        export class FormButton extends Component {
            render() {
                const { className, title, input, type } = this.props
                return(
                    <div classname='form-button'>
                        <button
                            className={`${className} form-button__button`}
                            type={type}
                            {...input}
                            >
                            {title}
                            </button>
                    </div>
                )}
            }