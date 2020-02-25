/*

    Задание 3:


    Написать класс Posts в котором есть данные:

    _id
    isActive,
    title,
    about,
    likes,
    created_at

    У класса должен быть метод addLike и render.

    Нужно сделать так чтобы:
    - После добавления поста, данные о нем записываются в localStorage.
    - После перезагрузки страницы, данные должны сохраниться.
    - Можно было прездагрузить данные в данный модуль: http://www.json-generator.com/api/json/get/cgCRXqNTtu?indent=2

*/
    //1.Создать класс в котором есть определенные данные и методы
    //2.Рендер должен отрисовывать данные созданного класса и так же все данные сохранить в Local
    //3.Данные которые присутствуют в классе запушить в обьект 
    //4.Загрузить данные в модуль jsona
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let PostObj = {};
    let Status = [true,false];
    class Posts {
        constructor(title, about, created_at){
            let Data = new Date;

            this.title = title;
            this.about = about;
            this.created_at = created_at;
            this.id = Data.getTime();
            this.likes = 0;
            this.save = this.save.bind(this);
            this.isActive = Status[getRandomIntInclusive(0,1)];
        }
        save(e){
            localStorage.setItem('post',JSON.stringify(PostObj));
        }
        render(){
            let node = document.createElement('div');
                node.innerHTML = 
                `
                <ul>
                <li>id:${this.id}</li>
                <li>Title:${this.title}</li>
                <li>ThemeAbout:${this.about}</li>
                <li>Reason:${this.created_at}</li>
                <li>Likes:${this.likes}</li>
                </ul>
                <button id="Saving">SaveData</button>
                `;
                document.body.appendChild(node);
                var BtnSaving = document.getElementById('Saving');
                BtnSaving.addEventListener('click', this.save);
                PostObj["id"] = this.id ;
                PostObj["about"] = this.about;
                PostObj["created_at"] = this.created_at;
                PostObj["title"] = this.title;
                PostObj["likes"] = this.likes;
                PostObj["isActive"] = this.isActive;
        }
        addLike(){
            this.likes++;
        }
    }
    let NewPost = new Posts('Comment','Country','CallToFriends');
     NewPost.addLike();
      NewPost.addLike();
       NewPost.addLike();
    NewPost.render();
