import React from 'react';
import { render } from 'react-dom';
import { Root } from './components/Root';
require('../css/styles.scss');

render(
    <Root />,
    document.getElementById('app')
);
