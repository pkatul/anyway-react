import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { App } from './components/App';
import store from './redux/Store';

render(
    (
        <Provider store={ store }>
            <Router>
                <Route path="/:filter?" component={ App } />
            </Router>
        </Provider>
    ),
    document.getElementById('app')
);
