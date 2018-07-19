import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from "../textLink";

class SigninForm extends Component {
    render() {
        return (
            <form>
                <FormTitle classname='sign-in__title' text='Login' />
                <Field 
                className='sign-in-form__email' 
                placehoder='Enter Email' 
                component={FormInput} 
                name='email' 
                type='email'
                title="Email"
                component={FormInput}
                />
                <Field 
                className='sign-in-form__password' 
                placehoder='Enter Password' 
                component={FormInput} 
                name='password' 
                type='password'
                title="Password"
                component={FormInput}
                />
                <Field 
                className='sign-in-form__login' 
                component={FormInput} 
                name='login' 
                type='submit'
                title="login"
                component={FormButton}
                />
                <div className='sign-in-form__text-links'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/signup' text='Sign Up'/>
                </div>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm