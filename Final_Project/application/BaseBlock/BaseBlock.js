import {MyCourse} from '.././Classess/CourseClass';
import {News} from '.././Classess/NewsClass';
import {Menu} from '.././Classess/MenuAndLogo';

const BaseBlock = () => {
function RenderSave (){
		function addTitle(event){
			let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
			newTitle.forEach(function(item){
				var DataTitleId = Number(item.dataset.id);
				if (Number(event.target.dataset.id) == DataTitleId){
					item.textContent = null;
					item.textContent += event.target.value;
					for (var i = 0; i<MainData.Courses.length; i++){
						if (DataTitleId -1 == i){
							MainData.Courses[i].title = event.target.value;
							localStorage.setItem('MyProject', JSON.stringify(MainData));
						}
					}
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
				for (var i = 0; i<MainData.Courses.length; i++){
						if (DataIdUrl -1 == i){
							MainData.Courses[i].URL = event.target.value;
							localStorage.setItem('MyProject', JSON.stringify(MainData));
						}
					}
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
					MainData.Courses.splice(idOfIconBlock -1, 1);
					localStorage.setItem('MyProject', JSON.stringify(MainData));
				}
			})
			}
			for (var i = 0; i<MainData.Courses.length; i++){
				console.log(MainData.Courses[i]);
				Counter++;
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
					MyNewCourse.querySelector('.titleCourse').addEventListener('input', addTitle);
					MyNewCourse.querySelector('.titleURL').addEventListener('input', addURL);
					MyNewCourse.querySelector('.DeleteFunc').addEventListener('click', deleteCourse);
					MyNewCourse.querySelector('.titleCourse').value =MainData.Courses[i].title ;
					MyNewCourse.querySelector('.titleURL').value = MainData.Courses[i].URL;
				let MyNewCourseShow = document.createElement('div');
					MyNewCourseShow.className = "iconsBlock";
					MyNewCourseShow.dataset.id = Counter;
					MyNewCourseShow.innerHTML = 
					`
					<img class="icons" src="${MainData.Courses[i].URL}"data-id="${Counter}" />
					<span class="nameOfCourse"data-id="${Counter}"  id="nameOfCourse">${MainData.Courses[i].title}</span>
					`;
					CourseBlock.appendChild(MyNewCourseShow);
			}	
	}
	function AddCourse (event){
		Counter++;
		let Course = new MyCourse();
		Course.render();
    	localStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));
	}
	AddNewCourse.addEventListener('click', AddCourse);
	function RenderNews (){
let date = new Date();
function DeleteNews(event){
			Counter_2--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		NewsBlock.querySelector('.NewsData[data-id="'+event.target.dataset.id+'"]').remove();
		MainData.News.splice(event.target.dataset.id - 1, 1);
		localStorage.setItem('MyProject', JSON.stringify(MainData));
		}
function AddNews(event){
		let News = NewsBlock.querySelectorAll('.areaNews');
			News.forEach(function(text){
				let idOfNews = Number(text.dataset.id);
				if (Number(event.target.dataset.id) == idOfNews){
					text.value = event.target.value;
					for (var i = 0; i<MainData.News.length; i++){
						if (idOfNews -1 == i){
							MainData.News[i].Text = event.target.value;
							localStorage.setItem('MyProject', JSON.stringify(MainData));
						}
					}
				}
			})
		}
		for (var i = 0; i<MainData.News.length; i++){
			Counter_2++;
		let news = document.createElement('div');
			news.className = "NewsData";
			news.dataset.id = Counter_2;
			news.innerHTML = 
			`
			<label class="newsList" id="dataLabel">${"Новость"+Counter_2}<span class="TimeNow" id="DateToday">${date.getFullYear() + '/' + date.getMonth() + '/'+ date.getDate()}</span></label>
			<textarea class="areaNews" id="dataNews" data-id="${Counter_2}" disabled>${MainData.News[i].Text}</textarea>
			`;
			NewsBlock.appendChild(news);
		let newsCust = document.createElement('div');
			newsCust.className = "ValueOfNews";
			newsCust.innerHTML = 
			`
			<textarea type="text" class="ToCustomNews" data-id="${Counter_2}">${MainData.News[i].Text}</textarea>
			<button class="DeleteFuncNews" id="RemoveBtn" data-id="${Counter_2}">&#10006;</button>
			`;
			NewsCustomValues.appendChild(newsCust);
			newsCust.querySelector('.DeleteFuncNews').addEventListener('click', DeleteNews);
			newsCust.querySelector('.ToCustomNews').addEventListener('change',AddNews);
			newsCust.querySelectorAll('ToCustomNews').forEach(function(input){
				let idOfCustInput = Number(input.dataset.id);
				news.querySelectorAll('.areaNews').forEach(function(input2){
					let idOfShowInput = Number(input2.dataset.id);
					if (idOfCustInput == idOfShowInput){
						input.value = input2.value;
					}
				}) 
			})
		}
}
	function NewsAdd(event){
		Counter_2++;
		let MyNews = new News();
		MyNews.render();
    	localStorage.setItem('NewsID'+Counter_2, JSON.stringify(myObj2));
	} 
	addNews.addEventListener('click',NewsAdd);

	// function MenuRendering (){
	// function addMenuList(event){
	// 	let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
	// 		MenuItems.forEach(function(item){
	// 		let idOfList = Number(item.dataset.id);
	// 		console.log(item.dataset.id)
	// 		if (Number(event.target.dataset.id) == idOfList){
	// 			item.innerText = event.target.value;
	// 				for (var i = 0; i<ParsedMenu.length; i++){
	// 					if (idOfList - 1 == i){
	// 						ParsedMenu[i].list = event.target.value;
	// 						localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
	// 					}
	// 				}
	// 				}
	// 			})
	// 	}
	// function removeMenuList(event){
	// 	Counter_3--;
	// 	let idblock = Number(event.target.parentNode.dataset.id);
	// 	event.target.parentNode.remove();
	// 	let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
	// 		MenuItems.forEach(function(item){
	// 			let idOfList = Number(item.dataset.id);
	// 			if (idblock == idOfList){
	// 				item.remove();
	// 				ParsedMenu.splice(idOfList - 1, 1);
	// 				localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
	// 			}
	// 		})
	// 	}
	// 	for (var i = 0; i<ParsedMenu.length; i++){
	// 		Counter_3++;
	// 		let list = document.createElement('a');
	// 		list.className = "navigation-li";
	// 		list.dataset.id = Counter_3;
	// 		list.innerText = ParsedMenu[i].list;
	// 		list.href = 'test';
	// 		MenuBlock.appendChild(list);
	// 	let listCust = document.createElement('div');
	// 		listCust.className = 'ValuesOfMenu';
	// 		listCust.dataset.id = Counter_3;
	// 		listCust.innerHTML = 
	// 		`
	// 		<input class="ValuesOfMenuLink" data-id="${Counter_3}">
	// 		<button class="DeleteFuncMenu" id="RemoveBtn">&#10006;</button>
	// 		`;
	// 		MenuCustomBlock.appendChild(listCust);

	// 		MenuCustomBlock.querySelectorAll('.DeleteFuncMenu').forEach(function(button){
	// 			button.addEventListener('click', removeMenuList);
	// 		})
	// 		MenuCustomBlock.querySelectorAll('.ValuesOfMenuLink').forEach(function(input){
	// 			input.addEventListener('change', addMenuList);
	// 		})
	// 		MenuCustomBlock.querySelector('.DeleteFuncMenu').addEventListener('click', removeMenuList);
	// 		MenuCustomBlock.querySelector('.ValuesOfMenuLink').addEventListener('change', addMenuList);

	// 			MenuCustomBlock.querySelectorAll('.ValuesOfMenuLink').forEach(function(item){
	// 				MenuBlock.querySelectorAll('.navigation-li').forEach(function(item2){
	// 					if (Number(item.dataset.id) == Number(item2.dataset.id)){
	// 						item.value = item2.innerText;
	// 					}
	// 				})
	// 			})
	// 	}
	// }
	// function MenuAdding (event) {
	// 	Counter_3++;
	// 	let MyList = new Menu();
	// 	MyList.render();
	// 	localStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));
	// }
	// AddList.addEventListener('click', MenuAdding);
	// MenuRendering();
	RenderNews();
	RenderSave();	
	 function showFile(e) {
    var files = e.target.files;
        console.log(files);
   		for (var i = 0, f; f = files[i]; i++) {
      		if (!f.type.match('image.*')) continue;
      			var fr = new FileReader();
      			fr.onload = (function(theFile) {
        			return function(e) {
          				MyLogo.setAttribute('src', e.target.result);
          				localStorage.setItem('Logo', e.target.result);
        			};
      			})(f);
      		fr.readAsDataURL(f);
    		}
  		}
	}
	ImgChanger.addEventListener('change', showFile, false);
	MyLogo.setAttribute('src', localStorage.getItem('Logo'));
export {BaseBlock};
