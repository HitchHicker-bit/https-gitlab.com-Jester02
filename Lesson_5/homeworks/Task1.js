/*

  Задание:


    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);


    {
      avatarUrl: 'https://...',
      addLike: function(){...}
    }
    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }

      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>
*/
  // function Submits (name,text,URL){
  //     this.name = name;
  //     this.text = text; 
  //     if (URL !== undefined){
  //       this.URL = URL;
  //     }
  //     this.likes = 0;
  // }
  // var Submitty = new Submits("Dima","What's up guys?");
  // let defUrl = {
  //   URL:"https://vk.com/id331833459?z=photo331833459_456240917%2Falbum331833459_0%2Frev",
  //   iLike :function(like){
  //       if (like == "like"){
  //         this.likes += 1;
  //       }
  //     }
  // }
  // var CommentsArray = [];
  // function Comments (comment){
  //   this.comment = comment;
  //   CommentsArray.push(this.comment);
  //   Object.setPrototypeOf(Submitty , defUrl);
  // }
  // var myComment1 = new Comments("Hey what about ");
  // var myComment2 = new Comments("i'll be mushroom ");
  // var myComment3 = new Comments("which jumping on ");
  // var myComment4 = new Comments("Super Mario?");
  // Submitty.iLike("like");
  // console.log(CommentsArray);
  // function CommentFeed (object){
  //   for (key in object){
  //     alert(object[key]);
  //   }
  // }
  // CommentFeed(CommentsArray);


  const feed = [];
  const proto_obj = {
      avatar: "https://image.flaticon.com/icons/svg/1099/1099983.svg",
      addLike: function(){
        this.likes ++;
        console.log( this );
      }
  }

  function Comment( name, text, avatar ){
    this.name = name;
    this.text = text;
    if( avatar ){
      this.avatar = avatar;
    }
    this.likes = 0;
    Object.setPrototypeOf( this, proto_obj );

    feed.push( this );
    console.log( this );
  }

  let myComment1 = new Comment("test",  "Hey what about");
  let myComment2 = new Comment("test2", "i'll be mushroom ", "https://image.flaticon.com/icons/svg/1099/1099980.svg");
  let myComment3 = new Comment("test3", "which jumping on", "https://image.flaticon.com/icons/svg/1100/1100000.svg");
  let myComment4 = new Comment("test4", "Super Mario?");

  feed.map( item => {
    let node = document.createElement('div');
    node.innerHTML = `
      <h1>${item.name} (${item.likes})</h1>
      <img width="40" src="${item.avatar}"/>
      <p>${item.text}</p>
    `;
    document.body.appendChild( node );

  });