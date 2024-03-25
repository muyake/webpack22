// import _ from 'lodash';
import './style.css';
import printMe from './print.js';
import _ from 'lodash';
import * as mtdpMap from "webpackstduy22";

function component() {
    const map = new mtdpMap.Map();
    console.log(map.getCenter());
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // const nn = webpackNumbers.Add(4, 3);
    // console.log(nn);
    // console.log(webpackNumbers);
    btn.innerHTML = 11;
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());