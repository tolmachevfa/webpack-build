import createMenu from '../../components/menu/menu';
import './index.scss';
import 'normalize.css';

var menu = createMenu(['tab 1', 'tab 2', 'tab 3', 'tab 4'], 'menu');
document.body.appendChild(menu);

console.log('in index.pug');
console.log($);
