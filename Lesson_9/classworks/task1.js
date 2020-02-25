/*

    Задание 1:
    Написать скрипт, который по клику на кнопку рандомит цвет и записывает его в localStorage
    После перезагрузки страницы, цвет должен сохранится.

*/
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
	  max = Math.floor(max);
	  let res = Math.floor(Math.random() * (max - min + 1)) + min;
	  console.log('res', res);
      return res;
    }
var rgb = [getRandomIntInclusive(0,255).toString(16), getRandomIntInclusive(0,255).toString(16), getRandomIntInclusive(0,255).toString(16)];
var resultBlock = document.getElementById('MyBlock');
var button = document.createElement('button');
	button.id = "GenColor";
	button.innerText = "Generate";
	resultBlock.appendChild(button);
	function LocalStorBackground (event){

		var rgb = [getRandomIntInclusive(0,255).toString(16), getRandomIntInclusive(0,255).toString(16), getRandomIntInclusive(0,255).toString(16)];
		var RGB = "";
			function RgB (){
				for (var i = 0; i<rgb.length; i++){
					if (rgb[i].length == 1){
						rgb[i] = "0"+ rgb[i];
					}
				}
				for (var j = 0; j<rgb.length; j++){
					RGB += rgb[j];
				}
			}
			RgB();
			console.log(RGB);
			localStorage.setItem('back', RGB);
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
