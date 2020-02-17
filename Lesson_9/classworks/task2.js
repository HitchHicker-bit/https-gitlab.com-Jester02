/*

    Задание 2:
    Написать форму логина (логин пароль), которая после отправки данных записывает их в localStorage.
    Если в localStorage есть записть - На страниче вывести "Привет {username}", если нет - вывести окно
    логина.

    + бонус, сделать кнопку "выйти" которая удаляет запись из localStorage и снова показывает форму логина
    + бонус сделать проверку логина и пароля на конкретную запись. Т.е. залогинит пользователя если
    он введет только admin@example.com и пароль 12345678


*/
	
	function CheckingYourDates (a,b){
		function FormLocalStorage (event){
		localStorage.setItem('username',username.value);
		localStorage.setItem('password',userpass.value);
		}
		var myBlock = document.getElementById('MyBlock');
			var form = document.createElement('form');
				form.id = "SignIn";
				myBlock.appendChild(form);
			var FormForLog = document.getElementById('SignIn');

		if (localStorage.getItem(a) == null && localStorage.getItem(b) == null){
			var myBlock = document.getElementById('MyBlock');
			var form = document.createElement('form');
				form.id = "SignIn";
				myBlock.appendChild(form);
			var FormForLog = document.getElementById('SignIn');
			var input = document.createElement('input');
				input.type = "text";
				input.id = "name";
			var label = document.createElement('label');
				label.innerText = "Login";
				FormForLog.appendChild(label);
				label.appendChild(input);
			var inputPass = document.createElement('input');
				inputPass.type = "password";
				inputPass.id = "pass";
			var labelPass = document.createElement('label');
				labelPass.innerText = "Password";
				FormForLog.appendChild(labelPass);
				labelPass.appendChild(inputPass);
			var button = document.createElement('button');
				button.id = "saveInStorage";
				button.type = "submit";
				button.innerText = "Save";
				FormForLog.appendChild(button);
			var username = document.getElementById('name');
			var userpass = document.getElementById('pass');
			var SubmitDates = document.getElementById('saveInStorage');
				SubmitDates.addEventListener('click', FormLocalStorage);
		} else if (localStorage.getItem(a) != null && localStorage.getItem(b) != null){
			var FormForLog = document.getElementById('SignIn');
			FormForLog.innerHTML = null;
			var span = document.createElement('h1');
			span.innerText = "Hello "+ localStorage.getItem(a);
			FormForLog.appendChild(span);
			var buttonExit = document.createElement('button');
				buttonExit.id = "LogOut";
				buttonExit.innerText = "LogOut";
				FormForLog.appendChild(buttonExit);
			function LogOutFromStor (e){
				localStorage.removeItem("username");
				localStorage.removeItem("password");
			}
			var Exit = document.getElementById('LogOut');
				Exit.addEventListener('click', LogOutFromStor);
		}
	}
	CheckingYourDates("username","password");
