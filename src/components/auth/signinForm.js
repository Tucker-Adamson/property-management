import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form>
                <FormTitle classname='sign-in__title' text='Login'/>
                <Field className='sign-in-form__email' component={FormInput} name='email' type='email'/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm