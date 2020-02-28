var CourseBlock = document.getElementById('CoursesBlock');
var NewsBlock = document.getElementById('NewsBlock');
var MenuBlock = document.getElementById('navigation-block');
var MenuList = document.getElementById('navigation');
var CoursesBlockCust = document.getElementById('CustomBlock')
const BtnCustomCourse = document.getElementById('Customization');
const BtnCustomNews = document.getElementById('NewsChanger');
const ChangeLogo = document.getElementById('changeLogo');
const Custom = document.getElementById('customMenu');
const CloseBtn = document.getElementById('Save');
const NewsCustom = document.getElementById('NewsCustom');
const CloseNews = document.getElementById('SaveNews');
const AddNewCourse = document.getElementById('AddNewCourse');
var ValueOfNews = document.getElementById("ValueOfNews");
var NewsCustomValues = document.getElementById('NewsCustomBlock');
var MenuSave = document.getElementById('SaveMenu');
var MenuCustom = document.getElementById('MainCustomMenu');
var MenuCustomBlock = document.getElementById('CustomMenuBlock');
var AddList = document.getElementById('AddNewMenu');
var Counter = 0;
var Counter_2 = 0;
var Counter_3 = 0;
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
	Custom.classList.add('show');
}
MenuBlock.onmouseleave = function (){
	ChangeLogo.classList.remove('show');
	Custom.classList.remove('show');
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
function CloseMenuCustom (event) {
	MenuCustom.classList.remove('show');
}
function OpenMenuCustom (event){
	MenuCustom.classList.add('show');
}
Custom.addEventListener('click', OpenMenuCustom);
//MenuSave.addEventListener('click', CloseMenuCustom);
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
		var CourseObject = [];
		var NewsObject = [];
		var MenuObj = [];
		var myObj2 = {};
		var myObj = {};
		var myObj3 = {};
		var MenuFromLocal = localStorage.getItem('MenuObj');
		var ParsedMenu = JSON.parse(MenuFromLocal);

    var DataFromLocal = localStorage.getItem('CourseObject');
    var NewsFromLocal = localStorage.getItem('NewsObject');
    if (DataFromLocal == null){
    	localStorage.setItem('CourseObject', JSON.stringify(CourseObject));
    }
    if (NewsFromLocal == null){
    	localStorage.setItem('NewsObject', JSON.stringify(NewsObject));
    }
    var ParsedData = JSON.parse(DataFromLocal);
    var ParsedNews = JSON.parse(NewsFromLocal); 
    
class MyCourse {
	constructor(){
		this.deleteCourse = this.deleteCourse.bind(this);
		this.addTitle = this.addTitle.bind(this);
		this.addURL = this.addURL.bind(this);
	}
	addTitle(event){
		let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
		newTitle.forEach(function(item){
			let DataTitleId = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataTitleId){
				item.textContent = null;
				item.textContent += event.target.value;
				myObj["title"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));
			}
		})
	}
	addURL(event){
		let newURL = CourseBlock.querySelectorAll('.icons');
		newURL.forEach(function(item){
			let DataIdUrl = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataIdUrl){
				item.removeAttribute('src');
				item.setAttribute('src', event.target.value);
				myObj["URL"] = event.target.value;
				localStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));
				let CrsObj = localStorage.getItem('CourseID'+Counter);
				let Data = JSON.parse(CrsObj);
				ParsedData.push(Data);
				localStorage.removeItem('CourseID'+Counter);
  				localStorage.setItem('CourseObject', JSON.stringify(ParsedData));
			}
		})
	}
	deleteCourse(event){
		Counter--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let iconsId = CourseBlock.querySelectorAll('.iconsBlock');
			iconsId.forEach(function(block){
				let idOfIconBlock = Number(block.dataset.id);
				if (idblock == idOfIconBlock){
					block.remove();
					ParsedData.splice(idOfIconBlock - 1, 1);
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
		MyNewCourse.querySelector('.titleURL').addEventListener('change', this.addURL);
		MyNewCourse.querySelector('.DeleteFunc').addEventListener('click', this.deleteCourse);
		
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
		let Course = new MyCourse();
		Course.render();
		var DataFromLocal = localStorage.getItem('CourseObject');
    	var ParsedData = JSON.parse(DataFromLocal);
    	localStorage.setItem('CourseID'+Counter, JSON.stringify(myObj));
	}
	AddNewCourse.addEventListener('click', AddCourse);
	function RenderSave (){
		let DataFromLocal = localStorage.getItem('CourseObject');
		let ParsedData = JSON.parse(DataFromLocal);
		function addTitle(event){
			let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
			newTitle.forEach(function(item){
				var DataTitleId = Number(item.dataset.id);
				if (Number(event.target.dataset.id) == DataTitleId){
					item.textContent = null;
					item.textContent += event.target.value;
					for (var i = 0; i<ParsedData.length; i++){
						if (DataTitleId -1 == i){
							ParsedData[i].title = event.target.value;
							localStorage.setItem('CourseObject', JSON.stringify(ParsedData));
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
				for (var i = 0; i<ParsedData.length; i++){
						if (DataIdUrl -1 == i){
							ParsedData[i].URL = event.target.value;
							localStorage.setItem('CourseObject', JSON.stringify(ParsedData));
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
					ParsedData.splice(idOfIconBlock -1, 1);
					localStorage.setItem('CourseObject', JSON.stringify(ParsedData));
				}
			})
			}
			for (var i = 0; i<ParsedData.length; i++){
				console.log(ParsedData[i]);
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
					MyNewCourse.querySelector('.titleCourse').value =ParsedData[i].title ;
					MyNewCourse.querySelector('.titleURL').value = ParsedData[i].URL;
				let MyNewCourseShow = document.createElement('div');
					MyNewCourseShow.className = "iconsBlock";
					MyNewCourseShow.dataset.id = Counter;
					MyNewCourseShow.innerHTML = 
					`
					<img class="icons" src="${ParsedData[i].URL}"data-id="${Counter}" />
					<span class="nameOfCourse"data-id="${Counter}"  id="nameOfCourse">${ParsedData[i].title}</span>
					`;
					CourseBlock.appendChild(MyNewCourseShow);
			}	
	}
	RenderSave();

class News {
	constructor(){
		this.AddNews = this.AddNews.bind(this);
		this.DeleteNews = this.DeleteNews.bind(this);
		this.date = new Date();
	}
	DeleteNews(event){
		Counter_2--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let News = NewsBlock.querySelectorAll('.NewsData');
			News.forEach(function(item){
				let idOfNews = Number(item.dataset.id);
				if (idblock == idOfNews){
					item.remove();
					ParsedNews.splice(idOfNews - 1, 1);
				}
			})
		}
	AddNews(event){
		let News = NewsBlock.querySelectorAll('.areaNews');
			News.forEach(function(text){
				let idOfNews = Number(text.dataset.id);
				if (Number(event.target.dataset.id) == idOfNews){
					text.value = event.target.value;
					myObj2["Text"] = event.target.value;
					localStorage.setItem('NewsID'+Counter_2, JSON.stringify(myObj2));
					let CrsObj = localStorage.getItem('NewsID'+Counter_2);
					let Data = JSON.parse(CrsObj);
					ParsedNews.push(Data);
					localStorage.removeItem('NewsID'+Counter_2);
  					localStorage.setItem('NewsObject', JSON.stringify(ParsedNews));
				}
			})
	}
	render(){
		let news = document.createElement('div');
			news.className = "NewsData";
			news.dataset.id = Counter_2;
			news.innerHTML = 
			`
			<label class="newsList" id="dataLabel">${"Новость"+Counter_2}<span class="TimeNow" id="DateToday">${this.date.getFullYear() + '/' + this.date.getMonth() + '/'+ this.date.getDate()}</span></label>
			<textarea class="areaNews" id="dataNews" data-id="${Counter_2}" disabled></textarea>
			`;
			NewsBlock.appendChild(news);
		let newsCust = document.createElement('div');
			newsCust.className = "ValueOfNews";
			newsCust.dataset.id = Counter_2;
			newsCust.innerHTML = 
			`
			<textarea type="text" class="ToCustomNews" data-id="${Counter_2}"></textarea>
			<button class="DeleteFuncNews" id="RemoveBtn" data-id="${Counter_2}">&#10006;</button>
			`;
			NewsCustomValues.appendChild(newsCust);
			newsCust.querySelector('.DeleteFuncNews').addEventListener('click', this.DeleteNews);
			newsCust.querySelector('.ToCustomNews').addEventListener('change',this.AddNews);
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
	var addNews = document.getElementById('AddNewNews');
		addNews.addEventListener('click',NewsAdd);
	
	function RenderNews (){
		let date = new Date();
	function DeleteNews(event){
		Counter_2--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let News = NewsBlock.querySelectorAll('.NewsData');
			News.forEach(function(item){
				let idOfNews = Number(item.dataset.id);
				if (idblock == idOfNews){
					item.remove();
					ParsedNews.splice(idOfNews - 1, 1);
				}
			})
		}
	function AddNews(event){
		let News = NewsBlock.querySelectorAll('.areaNews');
			News.forEach(function(text){
				let idOfNews = Number(text.dataset.id);
				if (Number(event.target.dataset.id) == idOfNews){
					text.value = event.target.value;
					for (var i = 0; i<ParsedNews.length; i++){
						if (idOfNews -1 == i){
							ParsedNews[i].Text = event.target.value;
							localStorage.setItem('NewsObject', JSON.stringify(ParsedNews));
						}
					}
				}
			})
		}
		for (var i = 0; i<ParsedNews.length; i++){
			Counter_2++;
		let news = document.createElement('div');
			news.className = "NewsData";
			news.innerHTML = 
			`
			<label class="newsList" id="dataLabel">${"Новость"+Counter_2}<span class="TimeNow" id="DateToday">${date.getFullYear() + '/' + date.getMonth() + '/'+ date.getDate()}</span></label>
			<textarea class="areaNews" id="dataNews" data-id="${Counter_2}" disabled>${ParsedNews[i].Text}</textarea>
			`;
			NewsBlock.appendChild(news);
		let newsCust = document.createElement('div');
			newsCust.className = "ValueOfNews";
			newsCust.innerHTML = 
			`
			<textarea type="text" class="ToCustomNews" data-id="${Counter_2}">${ParsedNews[i].Text}</textarea>
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
	RenderNews();


class Menu {
	constructor(){
		this.addMenuList = this.addMenuList.bind(this);
		this.removeMenuList = this.removeMenuList.bind(this);
	}
	addMenuList(event){
		let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
		console.log(event.target.dataset.id);
			MenuItems.forEach(function(item){
					console.log(item.dataset.id);
			let idOfList = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == idOfList){
					item.innerText = event.target.value;
					myObj3["list"] = event.target.value;
					localStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));
					let CrsObj = localStorage.getItem('ListID'+Counter_3);
					let Data = JSON.parse(CrsObj);
					ParsedMenu.push(Data);
					localStorage.removeItem('ListID'+Counter_3);
  					localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
					}
				})
			}
	removeMenuList(event){
		Counter_3--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let MenuItems = MenuBlock.querySelectorAll('.navigation-list');
			MenuItems.forEach(function(item){
				let idOfList = Number(item.dataset.id);
				if (idblock == idOfList){
					item.remove();
					ParsedMenu.splice(idOfList - 1, 1);
					localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
				}
			})
		}
	render(){
		let div = document.createElement('div');
			div.className = 'navigation-list';
			div.dataset.id = Counter_3;
			div.innerHTML = 
			`
			<a class="navigation-li" href="#rofl" data-id="${Counter_3}"></a>
			`;
			MenuBlock.appendChild(div);
		let listCust = document.createElement('div');
			listCust.className = 'ValuesOfMenu';
			listCust.dataset.id = Counter_3;
			listCust.innerHTML = 
			`
			<input class="ValuesOfMenuLink" data-id="${Counter_3}">
			<button class="DeleteFuncMenu" id="RemoveBtn">&#10006;</button>
			`;
			MenuCustomBlock.appendChild(listCust);
			MenuCustomBlock.querySelector('.DeleteFuncMenu').addEventListener('click', this.removeMenuList);
			MenuCustomBlock.querySelector('.ValuesOfMenuLink').addEventListener('change', this.addMenuList);

	}
}
	function MenuAdding (event) {
		Counter_3++;
		let MyList = new Menu();
		MyList.render();
		if (myObj3.list != undefined){
			delete myObj3.list;
		}
		localStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));
	}
	AddList.addEventListener('click', MenuAdding);

	function MenuRendering (){
	function addMenuList(event){
		let MenuItems = MenuList.querySelectorAll('.navigation-list');
			MenuItems.forEach(function(item){
			let idOfList = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == idOfList){
				item.innerText = event.target.value;
					for (var i = 0; i<ParsedMenu.length; i++){
						if (idOfList - 1 == i){
							ParsedMenu[i].list = event.target.value;
							localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
						}
					}
					}
				})
		}
	function removeMenuList(event){
		Counter_3--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
			MenuItems.forEach(function(item){
				let idOfList = Number(item.dataset.id);
				if (idblock == idOfList){
					item.remove();
					ParsedMenu.splice(idOfList - 1, 1);
					localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
				}
			})
		}
		for (var i = 0; i<ParsedMenu.length; i++){
			Counter_3++;
			let list = document.createElement('div');
			list.className = "navigation-list";
			list.dataset.id = Counter_3;
			list.innerHTML = 
			`
			<a class="navigation-li" href="#rofl" data-id="${Counter_3}">${ParsedMenu[i].list}</a>
			`;
			MenuBlock.appendChild(list);
		let listCust = document.createElement('div');
			listCust.className = 'ValuesOfMenu';
			listCust.dataset.id = Counter_3;
			listCust.innerHTML = 
			`
			<input class="ValuesOfMenuLink" data-id="${Counter_3}">
			<button class="DeleteFuncMenu" id="RemoveBtn">&#10006;</button>
			`;
			MenuCustomBlock.appendChild(listCust);
			MenuCustomBlock.querySelector('.DeleteFuncMenu').addEventListener('click', removeMenuList);
			MenuCustomBlock.querySelector('.ValuesOfMenuLink').addEventListener('change', addMenuList);
				MenuCustomBlock.querySelectorAll('.ValuesOfMenuLink').forEach(function(item){
					MenuBlock.querySelectorAll('.navigation-list').forEach(function(item2){
						if (Number(item.dataset.id) == Number(item2.dataset.id)){
							item.value = item2.innerText;
						}
					})
				})
		}
	}
	MenuRendering();
		
