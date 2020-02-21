/*
  Задача:

  1. При помощи fetch получить данные:
    http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2

  2. Полученый ответ преобразовать в json вызвав метод .json с объекта ответа
  3. Выбрать случайного человека и передать в следующий чейн промиса
  4. Сделать дополнительный запрос на получение списка друзей человека
    http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2
    И дальше передать обьект:
      {
        name: userName,
        ...
        friends: friendsData
      }

    Подсказка нужно вызвать дополнительный fecth из текущего чейна.
    Для того что бы передать результат выполнения доп. запроса
    в наш первый промис используйте констуркцию:

      .then(
        response1 => {
          return fetch(...)
            .then(
              response2 => {
                ...
                формируете обьект в котором будут данные человека с
                первого запроса, например его name response1.name
                и друзья которые пришли из доп. запроса
              }
            )
        }
      )

  5. Вывести результат на страничку

  + Бонус. Для конвертации обьекта response в json использовать одну
    функцию.

*/
function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
function dataFetch (){
    let url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';
    let url_2 = 'http://www.json-generator.com/api/json/get/bTBBXQabKG?indent=2';
    let options = {
        method:'POST'
    };
    const ReceiveObj = (data) => { 
       const random = getRandomIntInclusive(0 , data.length);
       console.log(data[random]);
       return data[random];
    }
    const ObjFriends = (data) => { 
        console.log(data);
    }
    async function UnitedObjItems(){
      const getObj = await fetch(url, options);
      const users = await getObj.json();
      const randomUser = users[getRandomIntInclusive(0, users.length)];
      console.log(randomUser);
      const getObjFriend = await fetch(url_2, options);
      const userFriends = await getObjFriend.json();
      console.log(userFriends);
      let {name, age, gender} = randomUser;
      const MyUser = {
        name,
        friends:userFriends[0].friends
      };

      return MyUser;
    }
    function ShowFriends (name,obj){
      document.body.innerHTML += `<h2>${name} his friends is:</h2>`;
        obj.map(item =>{
          document.body.innerHTML += `<h2>${item.name}</h2>`
        })
    }
    var ShowResult = UnitedObjItems();
    fetch( url, options )
    .then( res => res.json())
    .then( ReceiveObj )
    .then( res  => {
      return fetch(url_2, options)
          .then(res_2 => res_2.json())
          .then(ObjFriends);
    })
    ShowResult.then(data => {
        ShowFriends(data.name, data.friends);
       });
    }
document.addEventListener('DOMContentLoaded', () => {
    dataFetch();
});


  // fetch(url)
  //   .then(testFunc)
  //   .then(test2Func)
  //   .then( res => {
  //      return fetch()
  //       .then( friendsResponse)
  //       .then()
  //   })
  //   .then( func)
