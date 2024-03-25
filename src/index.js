// import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import _ from 'lodash';
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    btn.innerHTML = '1113Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  
     return element;
  }
  
  document.body.appendChild(component());