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
  function Submits (name,text,URL){
      this.name = name;
      this.text = text; 
      if (URL !== undefined){
        this.URL = URL;
      }
      this.likes = 0;
  }
  var Submitty = new Submits("Дима","Здарова пацаны");
  let defUrl = {
    URL:"https://vk.com/id331833459?z=photo331833459_456240917%2Falbum331833459_0%2Frev",
    iLike :function(like){
        if (like == "like"){
          this.likes += 1;
        }
      }
  }
  Object.setPrototypeOf(Submitty , defUrl);
  Submitty.iLike("like");
  console.log(Submitty.likes);


  function Comments (comment){
      this.comm = comment;
  }
  var myComment1 = new Comments("А давай я,");
  var myComment2 = new Comments("типо грибок ");
  var myComment3 = new Comments("прыгающий на ");
  var myComment4 = new Comments("Супер Марио?) ");

    var CommentsArray = [myComment1,myComment2,myComment3,myComment4];

  function CommentFeed (a){
    for (key in a){
      console.log(object[key]);
    }
  }
  CommentsFeed(CommentsArray);
  var myComments = new CommentFeed(CommentsArray);
      console.log(myComments);
