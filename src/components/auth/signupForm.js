import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from "../textLink";

class Sign-up-Form extends Component {
    render() {
        return (
            <form>
                <FormTitle classname='sign-up__title' text='Login' />
                {/*full name*/}
                {/*unit*/}
                {/*password*/}
                {/*email*/}
                <Field 
                    className="sign-up-form__fullname"
                    placeholder="Enter Full Name #"
                    name="Full Name"
                    type="text"
                    title="Full Name"
                    component={FormInput}
                />
                <Field
                    className="sign-up-form__email" 
                    placehoder="Enter Email" 
                    component={FormInput} 
                    name="email" 
                    type="email"
                    title="Email"
                    component={FormInput}
                />
                <Field 
                    className="sign-up-form__password" 
                    placehoder="Enter Password" 
                    component={FormInput} 
                    name="password" 
                    type="password"
                    title="Password"
                    component={FormInput}
                />
                <Field 
                    className="sign-up-form__create-account"
                    component={FormInput} 
                    name="createaccount" 
                    type="submit"
                    title="Create Account"
                    component={FormButton}
                />
                <div className='sign-up-form__text-links'>
                   <TextLink to='signin' text='Already Registered? Login'/>
                </div>
            </form>
        )
    }
}

SignupFormForm = reduxForm({
        form: 'Signup'
})(SignupFormForm);

export default SignupFormForm