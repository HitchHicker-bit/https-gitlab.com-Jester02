
/*
  Задание:
  Написать скрипт который:
    1. Собирает данные с формы (3 разных полей), конвертирует их в json и выводит в консоль.
  ->  2. Сделать отдельный инпут который выполняет JSON.parse(); на ту строку что вы туда ввели и выводит результат в консоль.

  Array.from(HTMLNodeColection); -> Arary

  <form>
    <input name="name" />
    <input name="age"/>
    <input name="password"/>
    <button></button>
  </form>

  <form>
    <input />
    <button></button>
  </form>
  -> '{"name" : !"23123", "age": 15, "password": "*****" }'


*/
var form = document.createElement('form');
    form.id = "JsonForm";
    document.body.appendChild(form);
var MyForm = document.getElementById('JsonForm');
var labelName = document.createElement('label');
    labelName.innerText = "Enter your name:";
var nameInput = document.createElement('input');
    nameInput.dataset.id = "name";
    nameInput.className = "areaForJson";
    labelName.appendChild(nameInput);
    MyForm.appendChild(labelName);
var labelAge = document.createElement('label');
    labelAge.innerText = "Enter your age";
    MyForm.appendChild(labelAge);
var ageInput = document.createElement('input');
    ageInput.type = "number";
    ageInput.dataset.id = "age";
    ageInput.className = "areaForJson";
    labelAge.appendChild(ageInput);
var labelPass = document.createElement('label');
    labelPass.innerText = "Enter your password";
    MyForm.appendChild(labelPass);
var passInput = document.createElement('input');
    passInput.type = "password";
    passInput.dataset.id = "password";
    passInput.className = "areaForJson";
    labelPass.appendChild(passInput);
var button = document.createElement('button');
    button.id = "sendData";
    button.type = "submit";
    button.innerText = "Submit";
    MyForm.appendChild(button);









const jsonData = MyForm.querySelectorAll('.areaForJson');
    function Stringify (e){
    var JsonObj = {
    }
      e.preventDefault();
      jsonData.forEach(function(item){
        let inputsJson = item.dataset.id;
        JsonObj[inputsJson] = item.value;
      })
      var Alex = JSON.stringify(JsonObj);
      console.log(Alex);

    }

const JsonBtn = document.getElementById('sendData');
      JsonBtn.addEventListener('click', Stringify);
var JsonParseDiv = document.createElement('div');
    JsonParseDiv.id = "ParseBlock";
    MyForm.appendChild(JsonParseDiv);
var ParseBlock = document.getElementById('ParseBlock')
var parseInput = document.createElement('input');
    parseInput.type = "text";
    parseInput.dataset.id = "parsed";
    parseInput.id = "specialInput";
var parseLabel = document.createElement('label');
    parseLabel.innerText = "Enter your Data: ";
var parseButton = document.createElement('button');
    parseButton.id = "Parsing";
    parseButton.innerText = "Start parsing";
    ParseBlock.appendChild(parseButton);
    parseLabel.appendChild(parseInput);
    ParseBlock.appendChild(parseLabel);
    function Parsing (e){
      e.preventDefault();
        var dataParse = document.getElementById('specialInput');
        var JsonData = '{"'+dataParse.getAttribute('data-id')+'":'+dataParse.value+ '}';
        var parsedData = JSON.parse(JsonData);
        console.log(parsedData)
    }
var btnParse = document.getElementById('Parsing');
    btnParse.addEventListener('click',Parsing );

