import 'flexboxgrid';
import './styles/styles.scss';

console.log('Je suis là !')

var wrapperMenu = document.querySelector('.wrapper-menu');
var menu = document.querySelector('.menu')

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');
  menu.classList.toggle('menuOpen');
})
