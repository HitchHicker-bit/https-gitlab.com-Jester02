/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    Например:
      encryptCesar('Word', 3);
      encryptCesar1(...)
      ...
      encryptCesar5(...)
      decryptCesar1('Sdwq', 5);
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/
      function Code (a){
        var Shifting = 3;
        var CodedStr = '';
        for (var i = 0; i<a.length; i++){
          var CodeOf = a.charCodeAt(i);
          CodeOf = CodeOf + Shifting;
          CodedStr += String.fromCharCode(CodeOf);
        }
        console.log(CodedStr);
      }
      function Uncode (b){
        var Outshifting = 3;
        var UncodedStr = '';
        for (var i = 0; i<b.length; i++){
          var CodeOf = b.charCodeAt(i);
          CodeOf = CodeOf - Outshifting;
          UncodedStr += String.fromCharCode(CodeOf);
        }
        console.log(UncodedStr);
      }
      Code("Hello");
      Uncode("Khoor");
