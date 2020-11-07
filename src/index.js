import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { loginUser, whoAmI } from './api';

loginUser('matt', 'matt');

whoAmI();

ReactDOM.render(
    <h1>Hi!</h1>,
    document.getElementById('app')
)