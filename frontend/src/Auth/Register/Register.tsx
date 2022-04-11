import React from 'react';
import AuthPage from '../common/AuthPage'
import { sendRequest } from './registerActions';

const Register = () => (
  <AuthPage title="Register" apiCall={sendRequest}/>
)

export default Register;