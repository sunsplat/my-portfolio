import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './Portfolio';
import registerServiceWorker from './registerServiceWorker';
import projectList from './projects.json';

ReactDOM.render(<Portfolio projects={projectList}/>, document.getElementById('root'));
registerServiceWorker();
