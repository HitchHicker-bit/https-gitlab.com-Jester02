var CourseBlock = document.getElementById('CoursesBlock');
var NewsBlock = document.getElementById('NewsBlock');
var MenuBlock = document.getElementById('navigation-block');
var CoursesBlockCust = document.getElementById('CustomBlock')
const BtnCustomCourse = document.getElementById('Customization');
const BtnCustomNews = document.getElementById('NewsChanger');
const ChangeLogo = document.getElementById('changeLogo');
const CustomMenu = document.getElementById('customMenu');
const CloseBtn = document.getElementById('Save');
const NewsCustom = document.getElementById('NewsCustom');
const CloseNews = document.getElementById('SaveNews');
const AddNewCourse = document.getElementById('AddNewCourse');
var CoursesNumber = 0;
var UrlNumber = 0;
var CourseId = 0;
var Counter = 6;
var Counter_2 = 1;


CourseBlock.onmouseenter = function () {
	BtnCustomCourse.classList.add('show');
}
CourseBlock.onmouseleave = function(){
	BtnCustomCourse.classList.remove('show');
}
NewsBlock.onmouseenter = function (){
	BtnCustomNews.classList.add('show');
}
NewsBlock.onmouseleave = function (){
	BtnCustomNews.classList.remove('show');
}
MenuBlock.onmouseenter = function (){
	ChangeLogo.classList.add('show');
	CustomMenu.classList.add('show');
}
MenuBlock.onmouseleave = function (){
	ChangeLogo.classList.remove('show');
	CustomMenu.classList.remove('show');
}
function ShowingCoursesCust (event){
    	CoursesBlockCust.classList.add('show');
    }
BtnCustomCourse.addEventListener('click',ShowingCoursesCust);
function CloseCoursesCust (event){
		CoursesBlockCust.classList.remove('show');
}
CloseBtn.addEventListener('click',CloseCoursesCust);
function ShowNewsCustom (event){
	NewsCustom.classList.add('show');
}
BtnCustomNews.addEventListener('click', ShowNewsCustom);
function CloseNewsCustom (event) {
	NewsCustom.classList.remove('show');
}
CloseNews.addEventListener('click', CloseNewsCustom);

var remove = document.getElementById('AddNewNews');
var removeBtn = remove.querySelectorAll('DeleteFuncNews');
var opt = document.getElementById('custOptions');
var optDelete = opt.querySelectorAll('.DeleteFunc');
	optDelete.forEach(function(item){
		item.addEventListener('click', function(event){
			var idOfDeleting = Number(event.target.parentNode.dataset.id);
			console.log(idOfDeleting);
			event.target.parentNode.remove();
		var ConnectBlock = CourseBlock.querySelectorAll('.iconsBlock');
			ConnectBlock.forEach(function(item){
				var idOfBlock = Number(item.dataset.id);
				if (idOfDeleting == idOfBlock){
					item.remove();
					Counter--;
					localStorage.removeItem('CourseName'+idOfBlock);
					localStorage.removeItem('CourseURL'+idOfBlock);
					localStorage.removeItem('CourseID'+idOfBlock);
				}
			})
		})
	})
//Сделать два класса один будет иметь две переменные title и url их через метод инпутов отрисовки рендера можно будет в реальном времени передать классу наследника так же не забыть добавить сохранения что первой  
// переменной что второй в localStorage

var ObjCourse = {
		}
class NewCourse {
	constructor(){
		this.deleteCourse = this.deleteCourse.bind(this);
		this.addTitle = this.addTitle.bind(this);
		this.addURL = this.addURL.bind(this);
	}
	addTitle(event){
		let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
		newTitle.forEach(function(item){
			var DataTitleId = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataTitleId){
				item.textContent = null;
				item.textContent += event.target.value;
				ObjCourse["title"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(ObjCourse));
			}
		})
	}
	addURL(event){
		let newURL = CourseBlock.querySelectorAll('.icons');
		newURL.forEach(function(item){
			var DataIdUrl = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataIdUrl){
				item.removeAttribute('src');
				item.setAttribute('src', event.target.value);
				ObjCourse["URL"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(ObjCourse));
			}
		})
	}
	deleteCourse(event){
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let iconsId = CourseBlock.querySelectorAll('.iconsBlock');
			iconsId.forEach(function(block){
				var idOfIconBlock = Number(block.dataset.id);
				if (idblock == idOfIconBlock){
					block.remove();
					localStorage.removeItem('CourseID'+block.dataset.id);
				}
			})
	}
	render(){
		let MyNewCourse = document.createElement('div');
			MyNewCourse.className = "DataOfCourses";
			MyNewCourse.dataset.id = Counter;
			MyNewCourse.innerHTML = 
			`
			<input class="titleCourse" type="text" name="name"data-id="${Counter}">
			<input class="titleURL" type="url" name="url" data-id="${Counter}">
			<button class="DeleteFunc" id="RemoveBtn">&#10006;</button>
			`;
			opt.appendChild(MyNewCourse);
		MyNewCourse.querySelector('.titleCourse').addEventListener('input', this.addTitle);
		MyNewCourse.querySelector('.titleURL').addEventListener('input', this.addURL);
		MyNewCourse.querySelector('.DeleteFunc').addEventListener('click', this.deleteCourse);
	}
}
class NewCourseShow{
	render(){
		let MyNewCourseShow = document.createElement('div');
			MyNewCourseShow.className = "iconsBlock";
			MyNewCourseShow.dataset.id = Counter;
			MyNewCourseShow.innerHTML = 
			`
			<img class="icons" src=""data-id="${Counter}" />
			<span class="nameOfCourse"data-id="${Counter}"  id="nameOfCourse"></span>
			`;
			CourseBlock.appendChild(MyNewCourseShow);
	}
}
	function AddCourse (event){
		Counter++;
		let Course = new NewCourse();
		let CourseCustomed = new NewCourseShow();
		Course.render();
		CourseCustomed.render();
		localStorage.setItem('CourseID'+Counter, JSON.stringify(ObjCourse));
	}
	AddNewCourse.addEventListener('click', AddCourse);
	function RenderSave (){
		for (var i = 1; i<=localStorage.length; i++){

		function deleteCourse(event){
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let iconsId = CourseBlock.querySelectorAll('.iconsBlock');
			iconsId.forEach(function(block){
				var idOfIconBlock = Number(block.dataset.id);
				if (idblock == idOfIconBlock){
					block.remove();
					localStorage.removeItem('CourseID'+block.dataset.id);
				}
			})
		}
		function addTitle(event){
		let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
		newTitle.forEach(function(item){
			var DataTitleId = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataTitleId){
				item.textContent = null;
				item.textContent += event.target.value;
				ObjCourse["title"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(ObjCourse));
				}
			})
		}
		function addURL(event){
		let newURL = CourseBlock.querySelectorAll('.icons');
		newURL.forEach(function(item){
			var DataIdUrl = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataIdUrl){
				item.removeAttribute('src');
				item.setAttribute('src', event.target.value);
				ObjCourse["URL"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(ObjCourse));
				}
			})
		}
			let ObjectCourse = localStorage.getItem('CourseID'+i);
			let dataCourse = JSON.parse(ObjectCourse);
			let MyNewCourse = document.createElement('div');
				MyNewCourse.className = "DataOfCourses";
				MyNewCourse.dataset.id = i;
				MyNewCourse.innerHTML = 
					`
					<input class="titleCourse" type="text" name="name"data-id="${i}">
					<input class="titleURL" type="url" name="url" data-id="${i}">
					<button class="DeleteFunc" id="RemoveBtn">&#10006;</button>
					`;
				opt.appendChild(MyNewCourse);
				MyNewCourse.querySelector('.titleCourse').addEventListener('input', addTitle);
				MyNewCourse.querySelector('.titleURL').addEventListener('input', addURL);
				MyNewCourse.querySelector('.DeleteFunc').addEventListener('click', deleteCourse);
				MyNewCourse.querySelector('.titleCourse').value = dataCourse.title;
				MyNewCourse.querySelector('.titleURL').value = dataCourse.URL;
				let MyNewCourseShow = document.createElement('div');
					MyNewCourseShow.className = "iconsBlock";
					MyNewCourseShow.dataset.id = i;
					MyNewCourseShow.innerHTML = 
						`
						<img class="icons" src="${dataCourse.URL}"data-id="${i}" />
						<span class="nameOfCourse"data-id="${i}"  id="nameOfCourse">${dataCourse.title}</span>
						`;
					CourseBlock.appendChild(MyNewCourseShow);
		}
	}
	RenderSave();
	
	
