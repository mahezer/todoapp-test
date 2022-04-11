import React from 'react';
import AuthPage from '../common/AuthPage'

import { sendRequest } from './loginActions';

const Login = () => (
  <AuthPage title="Login" apiCall={sendRequest}/>
)

export default Login;