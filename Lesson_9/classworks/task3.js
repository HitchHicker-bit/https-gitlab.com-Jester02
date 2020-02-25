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
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let Status = [true,false];
    class Posts {
        constructor(title, about, created_at){
            let Data = new Date;

            this.title = title;
            this.about = about;
            this.created_at = created_at;
            this.id = Data.getTime();
            this.likes = 0;
            this.isActive = Status[getRandomIntInclusive(0,1)];
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
                `;
                document.body.appendChild(node); 
        }
        addLike(){
            this.likes++;
        }
    }
    let NewPost = new Posts('Comment','Country','CallToFriends');
    let MyPost = new Posts('Hello','AlreadyInStorage','CheckIt');
    document.addEventListener('DOMContentLoaded', () => {
         NewPost.addLike();
         NewPost.addLike();
         NewPost.addLike();
         NewPost.render();
        localStorage.setItem('post' , JSON.stringify(NewPost));
        localStorage.setItem('post_2', JSON.stringify(MyPost));
    })
