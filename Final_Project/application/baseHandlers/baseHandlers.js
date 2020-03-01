const baseHandlers = () => {
CourseBlock.onmouseenter = function () {
		BtnCustomCourse.classList.add('show');
}
NewsBlock.onmouseenter = function () {
		BtnCustomNews.classList.add('show');
	}
MenuBlock.onmouseenter = function () {
		ChangeLogo.classList.add('show');
		Custom.classList.add('show');
}
CourseBlock.onmouseleave = function() {
	BtnCustomCourse.classList.remove('show');
}
NewsBlock.onmouseleave = function(){
	BtnCustomNews.classList.remove('show');
}
MenuBlock.onmouseleave = function(){
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
MenuSave.addEventListener('click', CloseMenuCustom);
}
export {baseHandlers};