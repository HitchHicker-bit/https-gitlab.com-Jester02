
  /*

    Задание 1.

    Написать скрипт который будет будет переключать вкладки по нажатию
    на кнопки в хедере.

    Главное условие - изменять файл HTML нельзя.

    Алгоритм:
      1. Выбрать каждую кнопку в шапке
        + бонус выбрать одним селектором

      2. Повесить кнопку онклик
          button1.onclick = function(event) {

          }
          + бонус: один обработчик на все три кнопки

      3. Написать функцию которая выбирает соответствующую вкладку
        и добавляет к ней класс active

      4. Написать функцию hideAllTabs которая прячет все вкладки.
        Удаляя класс active со всех вкладок

    Методы для работы:

      getElementById
      querySelector
      classList
      classList.add
      forEach
      onclick

      element.onclick = function(event) {
        // do stuff ...
      }

  */
   var buttonContainer = document.getElementById('buttonContainer');
  var showButton = buttonContainer.querySelectorAll('.showButton');
  var tabContainer = document.getElementById('tabContainer');
  var tabs = document.querySelectorAll('.tab[data-tab]');
  console.log(buttonContainer.querySelectorAll('.showButton'));
  showButton.forEach(function(item){
    console.log(item);
    item.onclick =function(){
      var tab = item.getAttribute('data-tab');
      console.log(tab);
      tabs.forEach(function(item){
        console.log(item);
        var numeric = item.getAttribute('data-tab');
        console.log(numeric);
        if (numeric == tab){
          item.classList.toggle('active');
        }
      });
   }
  });
    var button = document.createElement('button');
        button.type = "button";
        button.className = "hideAllTabs";
        button.id = "hideAll";
        button.innerText = "ByeCats";
        button.style.border = "none";
        buttonContainer.appendChild(button);
    var hideCats = document.getElementById('hideAll');
        hideCats.onclick = function(){  
        tabs.forEach(function(item){
        if (item.classList.contains('active') == true){
          item.classList.remove('active');
        }
      });
        }
