
	export default class MyCourse {
	constructor(){
		this.deleteCourse = this.deleteCourse.bind(this);
		this.addTitle = this.addTitle.bind(this);
		this.addURL = this.addURL.bind(this);
	}
	addTitle(event){
		let newTitle = CourseBlock.querySelectorAll('.nameOfCourse')
		let CourseId = event.target.dataset.id;
		newTitle.forEach(function(item){
			let DataTitleId = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataTitleId){
				item.textContent = null;
				item.textContent += event.target.value;
				MainData.Courses[CourseId - 1].title = event.target.value;
				localStorage.setItem('MyProject', JSON.stringify(MainData));
			}
		})
	}
	addURL(event){
		let newURL = CourseBlock.querySelectorAll('.icons');
		let CourseId = event.target.dataset.id;
		newURL.forEach(function(item){
			let DataIdUrl = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == DataIdUrl){
				item.removeAttribute('src');
				item.setAttribute('src', event.target.value);
				MainData.Courses[CourseId - 1].URL = event.target.value;
  				localStorage.setItem('MyProject', JSON.stringify(MainData));
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
					MainData.Courses.splice(idOfIconBlock - 1, 1);
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
export {MyCourse};
