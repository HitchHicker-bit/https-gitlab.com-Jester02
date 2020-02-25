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
var Counter = 0;
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
// var optDelete = opt.querySelectorAll('.DeleteFunc');
// 	optDelete.forEach(function(item){
// 		item.addEventListener('click', function(event){
// 			var idOfDeleting = Number(event.target.parentNode.dataset.id);
// 			console.log(idOfDeleting);
// 			event.target.parentNode.remove();
// 		var ConnectBlock = CourseBlock.querySelectorAll('.iconsBlock');
// 			ConnectBlock.forEach(function(item){
// 				var idOfBlock = Number(item.dataset.id);
// 				if (idOfDeleting == idOfBlock){
// 					item.remove();
// 					Counter_2--;
// 					localStorage.removeItem('CourseID'+idOfBlock);
// 				}
// 			})
// 		})
// 	})
var max = 0;
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
				localStorage.setItem('CourseID'+max, JSON.stringify(ObjCourse));
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
				localStorage.setItem('CourseID'+max, JSON.stringify(ObjCourse));
			}
		})
	}
	deleteCourse(event){
		Counter_2--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let iconsId = CourseBlock.querySelectorAll('.iconsBlock');
			iconsId.forEach(function(block){
				var idOfIconBlock = Number(block.dataset.id);
				if (idblock == idOfIconBlock){
					block.remove();
					localStorage.removeItem('CourseID'+block.dataset.id);
					Arr.splice(idOfIconBlock- 1,1);
				}
			})
	}
	render(){
		let MyNewCourse = document.createElement('div');
			MyNewCourse.className = "DataOfCourses";
			MyNewCourse.dataset.id = max;
			MyNewCourse.innerHTML = 
			`
			<input class="titleCourse" type="text" name="name"data-id="${max}">
			<input class="titleURL" type="url" name="url" data-id="${max}">
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
			MyNewCourseShow.dataset.id = max;
			MyNewCourseShow.innerHTML = 
			`
			<img class="icons" src=""data-id="${max}" />
			<span class="nameOfCourse"data-id="${max}"  id="nameOfCourse"></span>
			`;
			CourseBlock.appendChild(MyNewCourseShow);
	}
}
	function AddCourse (event){
		max++;
		let Course = new NewCourse();
		let CourseCustomed = new NewCourseShow();
		ObjCourse["id"] = max;
		Course.render();
		CourseCustomed.render();
		localStorage.setItem('CourseID'+max, JSON.stringify(ObjCourse));
	}
	AddNewCourse.addEventListener('click', AddCourse);
	var Arr = [];
	var Arr2 = [];
	function RenderSave (){
		for(var i = 0; i<localStorage.length; i++){
			Counter_2++;
			// var DataLocal = localStorage.getItem('CourseID'+Counter_2);
			var DataLocal = localStorage.getItem(localStorage.key(i));
			var ParsedData = JSON.parse(DataLocal);
			Arr2.push(localStorage.key(i));
			console.log(Arr2);
			// console.log(localStorage.setItem('CourseID'+Counter_2, JSON.stringify(ParsedData)));

		function addTitle(event){
			let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
			newTitle.forEach(function(item){
				var DataTitleId = Number(item.dataset.id);
				if (Number(event.target.dataset.id) == DataTitleId){
					item.textContent = null;
					item.textContent += event.target.value;
					ObjCourse["title"] = event.target.value;
					localStorage.setItem('CourseID'+max, JSON.stringify(ObjCourse));
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
				localStorage.setItem('CourseID'+max, JSON.stringify(ObjCourse));
			}
		})
	}
	function deleteCourse(event){
		Counter_2--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let iconsId = CourseBlock.querySelectorAll('.iconsBlock');
			iconsId.forEach(function(block){
				var idOfIconBlock = Number(block.dataset.id);
				if (idblock == idOfIconBlock){
					block.remove();
					localStorage.removeItem('CourseID'+block.dataset.id);
					Arr.splice(idOfIconBlock - 1,1);
				}
			})
			}
			
		}
		let sorted = Arr2.sort();
		for (var h = 0; h<sorted.length; h++){
			Arr.push(sorted[h]);
		}
		for (var i = 0; i<Arr.length; i++){
			let dataCourseSorted = localStorage.getItem(Arr[i]);
			let dataParsed = JSON.parse(dataCourseSorted);
			if(dataParsed.id > max){
				max = dataParsed.id;
			}
			let MyNewCourse = document.createElement('div');
			MyNewCourse.className = "DataOfCourses";
			MyNewCourse.dataset.id = dataParsed.id;
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
			MyNewCourse.querySelector('.titleCourse').value = dataParsed.title;
			MyNewCourse.querySelector('.titleURL').value = dataParsed.URL;
			let MyNewCourseShow = document.createElement('div');
			MyNewCourseShow.className = "iconsBlock";
			MyNewCourseShow.dataset.id = dataParsed.id;
			MyNewCourseShow.innerHTML = 
			`
			<img class="icons" src="${dataParsed.URL}"data-id="${dataParsed.id}" />
			<span class="nameOfCourse"data-id="${dataParsed.id}"  id="nameOfCourse">${dataParsed.title}</span>
			`;
			CourseBlock.appendChild(MyNewCourseShow);
		}
	}
	RenderSave();
	
	
