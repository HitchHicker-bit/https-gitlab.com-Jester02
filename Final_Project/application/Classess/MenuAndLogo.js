import uniqid from 'uniqid'; 

import StorageController from '../storageController';

export default class Menu {
	constructor(params = {}){
		const { id, title, href } = params;
		this.addMenuList = this.addMenuList.bind(this);
		this.removeMenuList = this.removeMenuList.bind(this);
		this.addHrefList = this.addHrefList.bind(this);
		this.id = id || uniqid();
		this.title = title || "";
		this.href = href || "";
		this.node = null;
		this.type = "menu";
		StorageController.createItem( this );
	}
	addMenuList(event){
		const MenuBlock = document.getElementById('navigation-block');
		let inputMenuValue = event.target.value;
		this.title = inputMenuValue;
		this.render( MenuBlock );
		StorageController.saveData( this );
	}
	addHrefList(event){
		const MenuBlock = document.getElementById('navigation-block');
		let inputMenuHref = event.target.value;
		this.href = inputMenuHref;
		this.render( MenuBlock);
		StorageController.saveData(this);
	}
	removeMenuList(event){
		event.target.closest('.ValuesOfMenu').remove();
		this.node.remove();
		StorageController.deleteData(this);
		}
	renderOptions(){
		const MenuCustomBlock = document.getElementById('CustomMenuBlock');
		let listCust = document.createElement('div');
			listCust.className = 'ValuesOfMenu';
			listCust.dataset.id = this.id;
			listCust.innerHTML = 
			`
			<input class="_ValMenu ValuesOfMenuLink" value="${this.title}">
			<input class="_Href HrefOfMenu" value="${this.href}">
			<button class="_DelMenu DeleteFuncMenu" id="RemoveBtn">&#10006;</button>
			`;
			MenuCustomBlock.appendChild(listCust);
			listCust.querySelector('.DeleteFuncMenu').addEventListener('click', this.removeMenuList);
			listCust.querySelector('.ValuesOfMenuLink').addEventListener('change', this.addMenuList);
			listCust.querySelector('.HrefOfMenu').addEventListener('change', this.addHrefList);
	}
	render (target){
		let	aList = null;
		if( this.node ){
			aList = this.node;
		} else {
			aList = document.createElement('div');
			this.node =	aList;
			target.appendChild(aList);
		}

		aList.className = "navigation-list";
		aList.dataset.id = this.id;

		if( this.href !== null || this.title !== null){
			aList.innerHTML = 
			`
			<a class="navigation-li" href="${this.href}">${this.title}</a>
			`;
		}
	}
}


export {Menu};
