 /*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/
 
 
 var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
  var currentPosition = 0;
  console.log(OurSliderImages[currentPosition]);
  var sliderImg = document.getElementById('slider');
  window.addEventListener('load', function(){
     var img = document.createElement('img');
      img.id = "default";
      img.src = OurSliderImages[currentPosition];
      sliderImg.appendChild(img);
       var slider = document.getElementById('default');
      var button = document.createElement('button');
      button.id = "RenderImage";
      button.innerText = "RenderImage";
      buttons.appendChild(button);
       var clean = document.getElementById('RenderImage');
       clean.addEventListener('click', CleanBlock);
      console.log(clean);
  }) 
       var buttons = document.getElementById('SliderControls');
        var prevNext = buttons.querySelectorAll('[id]');
      prevNext.forEach(function(btn){
        console.log(btn);
        btn.addEventListener('click',SliderChanger);
      })
  function SliderChanger (event) {
    console.log(event.target);
    if (event.target.id == "NextSilde"){
          currentPosition++;
          console.log(currentPosition);
          var img = document.createElement('img');
          img.id = "default";
          img.src = OurSliderImages[currentPosition];
      
          sliderImg.appendChild(img);
          var image = sliderImg.children[0];
          sliderImg.removeChild(image);
          if (currentPosition == 7){
            currentPosition = -1;
          }
        }
     if (event.target.id == "PrevSilde"){
        currentPosition--;
          console.log(currentPosition);
          var img = document.createElement('img');
          img.id = "default";
          img.src = OurSliderImages[currentPosition];
          sliderImg.appendChild(img);
          var image = sliderImg.children[0];
          sliderImg.removeChild(image);
          if (currentPosition == 0){
            currentPosition = 8;
          }
     }  
  }

      function CleanBlock (event){
        var image = sliderImg.children[0];
          sliderImg.removeChild(image);
      }
