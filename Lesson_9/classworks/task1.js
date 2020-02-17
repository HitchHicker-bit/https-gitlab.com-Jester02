/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
var rgb = getRandomIntInclusive(0,255).toString(16)+ getRandomIntInclusive(0,255).toString(16)+ getRandomIntInclusive(0,255).toString(16);
var resultBlock = document.getElementById('MyBlock');
var button = document.createElement('button');
	button.id = "GenColor";
	button.innerText = "Generate";
	resultBlock.appendChild(button);
	function LocalStorBackground (event){
		var rgb = getRandomIntInclusive(0,255).toString(16)+ getRandomIntInclusive(0,255).toString(16)+ getRandomIntInclusive(0,255).toString(16);
			localStorage.setItem('back', rgb);
	var	rgbDate	= localStorage.getItem('back');
			function Background (rgb){
				document.body.style.background = "#"+rgbDate;
			}
			Background(rgbDate);
	}
var GenBtn = document.getElementById('GenColor');
	GenBtn.addEventListener('click', LocalStorBackground);
	var rgbDate = localStorage.getItem('back');
		document.body.style.background = "#"+rgbDate;
