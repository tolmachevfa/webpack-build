import createMenu from '../../components/menu/menu';
import './index.scss';
import 'normalize.css';

var menu = createMenu(
  [
    'Олимпиада',
    'Правила',
    'Организаторы',
    'Профили',
    'График',
    'FAQ',
    'Обратная связь',
  ],
  'menu'
);
document.body.appendChild(menu);

console.log('in index.pug');
console.log($);
console.log(jQuery);