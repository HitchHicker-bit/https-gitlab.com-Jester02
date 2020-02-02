document.addEventListener("DOMContentLoaded", function () {
    var send = document.getElementById('send');
    var checked = document.getElementById('checking');    
    var MyForm = document.getElementById('myForm');
    var input = document.getElementById('iName');
        input.addEventListener('input', function(){
            if (input.value == ""){
                input.setCustomValidity('Как тебя зовут дружище?!');
            }  else {
                input.setCustomValidity('');
            }
        })
    var input_2 = document.getElementById('iEmail');
        input_2.addEventListener('input' , function(){
        
            if (input_2.validity.typeMismatch){
                input_2.setCustomValidity('Ну и зря, не получишь бандероль с яблоками!');
            } else {
                input_2.setCustomValidity('');
            }
        })
    var input_3 = document.getElementById('iPass');
        input_3.addEventListener('input', function(){
        
            if (input_3.validity.valueMissing){
                input_3.setCustomValidity('Я никому не скажу наш секрет');
            } else {
                input_3.setCustomValidity('');
            }
        })
    var input_4 = document.getElementById('iApple');
        input_4.addEventListener('input', function(){
        
            if (input_4.value == 0 || input_4.value < 0){
                input_4.setCustomValidity('Ну хоть покушай немного... Яблочки вкусные');
            } else {
                input_4.setCustomValidity('');
            }
        }) 
     var input_5 = document.getElementById('iThkful');
         input_5.addEventListener('input',function(){
            if (input_5.value != "спасибо"){
                input_5.setCustomValidity('Фу, неблагодарный');
            } else {
                input_5.setCustomValidity('');
            }
         })
     var input_6 = document.getElementById('iAgree');
         input_6.addEventListener('input', function(){
        
            if (input_6.validity.valueMissing == true){
                input_6.setCustomValidity('Необразованные живут дольше! Хорошо подумай!');
            } else {
                input_6.setCustomValidity('');
            }
         })   
         checked.onclick = function(){
            var result = MyForm.checkValidity();
            if (result == true){
            alert("Все поля заполнены верно!) Удачи ;)");
            } else {
            alert("Какое то из полей заполнено неверно! Проверь всё ещё раз!)")  
            }
         }
    })
