
import uniqid from 'uniqid'; 

import StorageController from '../storageController';


export default class MyCourse {
	constructor( params = {} ){

		const { id, title, url } = params;

		this.id = id || uniqid();
		this.title = title || "";
		this.url = url || "";
		this.node = null;
		this.type = "course";
		StorageController.createItem( this );
		this.deleteCourse = this.deleteCourse.bind(this);
		this.addTitle = this.addTitle.bind(this);
		this.addURL = this.addURL.bind(this);
	}
	addTitle(event){
		const CourseBlock = document.getElementById('CoursesBlock');
		let newTitleValue = event.target.value;
		this.title = newTitleValue;
		this.render( CourseBlock );
		StorageController.saveData( this );
	}
	addURL(event){
		const CourseBlock = document.getElementById('CoursesBlock');
		let newUrlValue = event.target.value;
		this.url = newUrlValue;
		this.render( CourseBlock );
		StorageController.saveData( this );
	}
	deleteCourse(event){
		event.target.closest('.DataOfCourses').remove();
		this.node.remove();
		StorageController.deleteData (this);
	}
	renderOptions(){
		const opt = document.getElementById('custOptions');

		let MyNewCourse = document.createElement('div');
			MyNewCourse.className = "DataOfCourses";
			MyNewCourse.dataset.id = this.id;
			MyNewCourse.innerHTML = 
			`
				<input class="_title titleCourse" type="text" name="name" value="${this.title}">
				<input class="_url titleURL" type="url" name="url" value="${this.url}">
				<button class="_del DeleteFunc" id="RemoveBtn">&#10006;</button>
			`;
			opt.appendChild(MyNewCourse);

			MyNewCourse.querySelector('._title').addEventListener('change', this.addTitle);
			MyNewCourse.querySelector('._url').addEventListener('change', this.addURL);
			MyNewCourse.querySelector('._del').addEventListener('click', this.deleteCourse);
	}

	render( target ){
		let MyNewCourseShow = null;
		if( this.node ){
			MyNewCourseShow	= this.node;
		} else {
			MyNewCourseShow = document.createElement('div');
			this.node = MyNewCourseShow;
			target.appendChild(MyNewCourseShow);
		}

		MyNewCourseShow.className = "iconsBlock";
		MyNewCourseShow.dataset.id = this.id;

		if( this.url !== null || this.title !== null){
			MyNewCourseShow.innerHTML = 
			`
				<img class="icons" src="${this.url}" />
				<span class="nameOfCourse" id="nameOfCourse">${this.title}</span>
			`;
		}
	}
}

export {MyCourse};
