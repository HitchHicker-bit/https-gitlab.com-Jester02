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
    var PersonObj ={

    }
function dataFetch (){
    let url = 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2';
    let options = {
        method:'POST'
    };
    const random = getRandomIntInclusive(0,8);
    const OnlyName = (data) => { 
        PersonObj["name"] = data[random].name;
        console.log(PersonObj);
    }
    const OnlyFrineds = (data) => {
        PersonObj["friends"] = data[random].friends;
    }
    const FriendsOf = () => {
      for (var i = 0; i < PersonObj.friends.length; i++){
        return PersonObj.friends[i].name;
      }
    }
    const ShowResult = () => {
      document.body.innerHTML = `<h2>Person ${PersonObj.name} his friends : ${FriendsOf()}</h2>`
    }
    fetch( url, options )
    .then( res => res.json())
    // .then( res => console.log("MyData", res))
    .then( OnlyName )
    .then( res  => {
      return fetch(url, options)
          .then(res => res.json())
          .then(OnlyFrineds);
    })
    .then(ShowResult);
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
