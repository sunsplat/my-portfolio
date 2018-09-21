import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import MyPortfolio from './MyPortfolio';
import registerServiceWorker from './registerServiceWorker';
import projectList from './projects.json';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MyPortfolio projects={projectList}/>, document.getElementById('root'));
registerServiceWorker();
