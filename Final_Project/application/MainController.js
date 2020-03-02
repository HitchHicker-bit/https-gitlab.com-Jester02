import {baseHandlers} from './baseHandlers/baseHandlers.js';
import {BaseBlock} from './BaseBlock/BaseBlock.js';

const mainControl = () => {
	global.Counter = 0;
	global.Counter_2 = 0;
	global.Counter_3 = 0;
	global.MenuCustomBlock = document.getElementById('CustomMenuBlock');
	global.NewsCustomValues = document.getElementById('NewsCustomBlock');
	global.opt = document.getElementById('custOptions');
	global.DataFromLocal = localStorage.getItem('CourseObject');
    global.NewsFromLocal = localStorage.getItem('NewsObject');
    global.MenuFromLocal = localStorage.getItem('MenuObj');
    global.ParsedData = JSON.parse(DataFromLocal);
    global.ParsedNews = JSON.parse(NewsFromLocal);
    global.ParsedMenu = JSON.parse(MenuFromLocal); 
    global.BtnCustomCourse = document.getElementById('Customization');
	global.BtnCustomNews = document.getElementById('NewsChanger');
	global.ChangeLogo = document.getElementById('changeLogo');
	global.Custom = document.getElementById('customMenu');
	global.CourseBlock = document.getElementById('CoursesBlock');
	global.NewsBlock = document.getElementById('NewsBlock');
	global.MenuBlock = document.getElementById('navigation-block');
	global.CoursesBlockCust = document.getElementById('CustomBlock')
	global.MenuCustom = document.getElementById('MainCustomMenu');
	global.CloseBtn = document.getElementById('Save');
	global.CloseNews = document.getElementById('SaveNews');
	global.MenuSave = document.getElementById('SaveMenu');
	global.addNews = document.getElementById('AddNewNews');
	global.AddList = document.getElementById('AddNewMenu');
	global.ParsedData = localStorage.getItem('MyProject');
	global.MainData = JSON.parse(ParsedData);
	global.myObj2 = {};
	global.myObj = {};
	global.myObj3 = {};
	baseHandlers();
	BaseBlock();
}
export {mainControl};