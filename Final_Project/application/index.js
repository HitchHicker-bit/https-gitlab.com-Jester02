import someFunction from './demo/someFn';
import {mainControl} from './MainController';

console.log('webpack is working');
/*
    Функцию импортируешь и используешь
*/
document.addEventListener('DOMContentLoaded', () => {
    someFunction();
    mainControl();
});