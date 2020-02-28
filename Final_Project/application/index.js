import someFunction from './demo/someFn';

console.log('webpack is working');
/*
    Функцию импортируешь и используешь
*/
document.addEventListener('DOMContentLoaded', () => {
    someFunction();
});