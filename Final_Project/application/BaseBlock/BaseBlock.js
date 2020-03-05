import {MyCourse} from '.././Classess/CourseClass';
import {News} from '.././Classess/NewsClass';
import {Menu} from '.././Classess/MenuAndLogo';
// import Logotype from '.././Classess/MenuAndLogo';

const BaseBlock = () => {
	function AddCourse(event) {
	const CourseBlock = document.getElementById('CoursesBlock');
	let Course = new MyCourse();
	Course.render( CourseBlock );
	Course.renderOptions()
	}
	function AddNews(event) {
		const NewsBlock = document.getElementById('NewsBlock');
		let MyNews = new News();
		MyNews.render(NewsBlock);
		MyNews.renderOptions(); 
	}
	function AddMenu(event) {
		const MenuBlock = document.getElementById('navigation-block');
		let MyMenu = new Menu();
		MyMenu.render(MenuBlock);
		MyMenu.renderOptions();
	}
	const ChangeLogo = document.getElementById('ImageChanger');
	function showFile(e) {
	const MyLogo = document.getElementById('MyLogo');
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

	ChangeLogo.addEventListener('change', showFile, false);
	MyLogo.setAttribute('src',localStorage.getItem('Logo'))
	AddNewMenu.addEventListener('click', AddMenu);
	AddNewNews.addEventListener('click' , AddNews);
	AddNewCourse.addEventListener('click', AddCourse);
}

	export {BaseBlock};
