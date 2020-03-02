
export default class Menu {
	constructor(){
		this.addMenuList = this.addMenuList.bind(this);
		this.removeMenuList = this.removeMenuList.bind(this);
	}
	addMenuList(event){
		let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
		console.log(event.target.dataset.id);
			
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
					ParsedMenu.splice(idOfList - 1, 1);
					localStorage.setItem('MenuObj', JSON.stringify(ParsedMenu));
				}
			})
		}
	render(){
		let a = document.createElement('a');
			a.className = 'navigation-li';
			a.dataset.id = Counter_3;
			a.href = 'test';
			MenuBlock.appendChild(a);
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

export {Menu};