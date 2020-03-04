
	export default class News {
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
					MainData.News.splice(idOfNews - 1, 1);
					localStorage.setItem('MyProject', JSON.stringify(MainData));
				}
			})
		}
	AddNews(event){
		let News = NewsBlock.querySelectorAll('.areaNews');
		let NewsId = event.target.dataset.id;
			News.forEach(function(text){
				let idOfNews = Number(text.dataset.id);
				if (Number(event.target.dataset.id) == idOfNews){
					text.value = event.target.value;
					MainData.News[NewsId - 1].Text = event.target.value
  					localStorage.setItem('MyProject', JSON.stringify(MainData));
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
export {News};
