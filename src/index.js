import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import registerServiceWorker from './registerServiceWorker';
import projects from './projects.json';

ReactDOM.render(<Portfolio projects={projects}/>, document.getElementById('root'));
registerServiceWorker();
