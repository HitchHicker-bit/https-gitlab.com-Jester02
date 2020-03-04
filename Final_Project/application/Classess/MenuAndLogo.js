
export default class Menu {
	constructor(){
		this.addMenuList = this.addMenuList.bind(this);
		this.removeMenuList = this.removeMenuList.bind(this);
		this.addHrefList = this.addHrefList.bind(this);
	}
	addMenuList(event){
		let inputMenuId = event.target.dataset.id;
		let inputMenuValue = event.target.value;
		MenuBlock.querySelector('.navigation-list[data-id="'+inputMenuId+'"]').textContent = inputMenuValue;
		MainData.Menu[inputMenuId -1].value = inputMenuValue;
		localStorage.setItem('MyProject', JSON.stringify(MainData));
	}
	addHrefList(event){
		let inputMenuId = event.target.dataset.id;
		MainData.Menu[inputMenuId - 1].href = event.target.value;
		localStorage.setItem('MyProject', JSON.stringify(MainData));
	}
	removeMenuList(event){
		Counter_3--;
		let idblock = Number(event.target.parentNode.dataset.id);
		event.target.parentNode.remove();
		let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
			MenuItems.forEach(function(item){
				let idOfList = Number(item.dataset.id);
				if (idblock == idOfList){
					item.remove();
					MainData.Menu.splice(idOfList - 1, 1);
					localStorage.setItem('MyProject', JSON.stringify(MainData));
				}
			})
		}
	render(){
		let a = document.createElement('div');
			a.className = 'navigation-li';
			a.dataset.id = Counter_3;
			a.innerHTML = 
			`
			<a class="navigation-list" href="#test" data-id="${Counter_3}"></a>
			`;
			MenuBlock.appendChild(a);
		let listCust = document.createElement('div');
			listCust.className = 'ValuesOfMenu';
			listCust.dataset.id = Counter_3;
			listCust.innerHTML = 
			`
			<input class="ValuesOfMenuLink" data-id="${Counter_3}">
			<input class="HrefOfMenu" data-id="${Counter_3}">
			<button class="DeleteFuncMenu" id="RemoveBtn">&#10006;</button>
			`;
			MenuCustomBlock.appendChild(listCust);
			listCust.querySelector('.DeleteFuncMenu').addEventListener('click', this.removeMenuList);
			listCust.querySelector('.ValuesOfMenuLink').addEventListener('change', this.addMenuList);
			listCust.querySelector('.HrefOfMenu').addEventListener('change', this.addHrefList);
	}
}


export {Menu};
