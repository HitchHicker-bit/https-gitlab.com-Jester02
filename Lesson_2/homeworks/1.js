
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
  var tab1 = tabContainer.querySelector('.tab[data-tab="1"]');
  var tab2 = tabContainer.querySelector('.tab[data-tab="2"]');
  var tab3 = tabContainer.querySelector('.tab[data-tab="3"]');
  console.log(tab1);
  showButton.forEach(function(item){
    console.log(item);
    item.onclick =function(){
      var tab = item.getAttribute('data-tab');
    if (tab == 1){
      tab1.classList.add('active');
    }
    if (tab == 2){
      tab2.classList.add('active');
    }
    if (tab == 3){
      tab3.classList.add('active');
    }
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
         if (tab1.classList.contains('active') == true) {
          tab1.classList.toggle('active');
         } 
         if (tab2.classList.contains('active') == true) {
          tab2.classList.toggle('active');
         }
         if (tab3.classList.contains('active') == true) {
          tab3.classList.toggle('active');
         }
        }
