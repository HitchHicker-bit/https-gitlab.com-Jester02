	import uniqid from 'uniqid'; 

	import StorageController from '../storageController';

	export default class News {
	constructor(params = {}){
		const { id, text } = params;
		this.AddNews = this.AddNews.bind(this);
		this.DeleteNews = this.DeleteNews.bind(this);
		this.date = new Date();
		this.id = id || uniqid();
		this.text = text || "";
		this.node = null;
		this.type = "news";
		StorageController.createItem( this );
	}
	DeleteNews(event){
		event.target.closest('.ValueOfNews').remove();
		this.node.remove();
		StorageController.deleteData (this);
		}
	AddNews(event){
		const NewsBlock = document.getElementById('NewsBlock');
		let newTextValue = event.target.value;
		this.text = newTextValue;
		this.render(NewsBlock);
		StorageController.saveData( this );
	}
	renderOptions(){
		const NewsCustomValues = document.getElementById('NewsCustomBlock');
		let newsCust = document.createElement('div');
			newsCust.className = "ValueOfNews";
			newsCust.dataset.id = this.id;
			newsCust.innerHTML = 
			`
			<textarea type="text" class="_CustNews ToCustomNews">${this.text}</textarea>
			<button class="_delNews DeleteFuncNews" id="RemoveBtn">&#10006;</button>
			`;
			NewsCustomValues.appendChild(newsCust);
			newsCust.querySelector('.DeleteFuncNews').addEventListener('click',this.DeleteNews);
			newsCust.querySelector('.ToCustomNews').addEventListener('change', this.AddNews);
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
	render( target ){
		let news = null;
		if( this.node ){
			news = this.node;
		} else {
			news = document.createElement('div');
			this.node = news;
			target.appendChild(news);
		}

		news.className = "NewsData";
		news.dataset.id = this.id;

		if( this.text !== null){
			news.innerHTML = 
			`
			<label class="newsList" id="dataLabel">${"Новость"}<span class="TimeNow" id="DateToday">${this.date.getFullYear() + '/' + this.date.getMonth() + '/'+ this.date.getDate()}</span></label>
			<textarea class="areaNews" id="dataNews" value="" disabled>${this.text}</textarea>
			`;
		}
	}
}
export {News};
