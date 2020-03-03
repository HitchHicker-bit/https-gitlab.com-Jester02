
export default class Menu {
	constructor(){
		this.addMenuList = this.addMenuList.bind(this);
		this.removeMenuList = this.removeMenuList.bind(this);
	}
	addMenuList(event){
		let MenuItems = MenuBlock.querySelectorAll('.navigation-li');
		console.log(event.target.dataset.id);
			MenuItems.forEach(function(item){
			let idOfList = Number(item.dataset.id);
			if (Number(event.target.dataset.id) == idOfList){
					item.textContent = event.target.value;
					myObj3["list"] = event.target.value;
					localStorage.setItem('ListID'+Counter_3, JSON.stringify(myObj3));
					let CrsObj = localStorage.getItem('ListID'+Counter_3);
					let Data = JSON.parse(CrsObj);
					MainData.Menu.push(Data);
					localStorage.removeItem('ListID'+Counter_3);
  					localStorage.setItem('MyProject', JSON.stringify(MainData));
					}
				})
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
 const Logotype = () => {
		function showFile(e) {
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
	}

export {Menu};
