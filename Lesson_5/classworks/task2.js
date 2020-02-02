let colors = {
    background: 'purple',
    color: 'white'
  }
  let colorsBind = {
    background: 'green',
    color: 'yellow',
  }
  var msg = {
    message: "Well it was too hard",
  }
  var colorApply = ["green","orange"];

  
  function myCall( color ){
    document.body.style.background = this.background;
    document.body.style.color = color;
    var block = document.getElementById('result');
    var h = document.createElement('h1');
        h.innerText = "I know how binding works in JS";
        h.color = color;
        block.appendChild(h);
  }
   function myCall2(){
    document.body.style.background = this.background;
     document.body.style.color = this.color;
    var block = document.getElementById('result');
    var h = document.createElement('h1');
        h.innerText = "I know how binding works in JS";
        h.color = this.color;
        block.appendChild(h);
  }
  function myCall3(message ,background, color){
    document.body.style.background = colorApply[1];
     document.body.style.color = colorApply[0];
    var block = document.getElementById('result');
    var h = document.createElement('h1');
        h.innerText = this.message;
        h.color = colorApply[0];
        block.appendChild(h);
  }
  // myCall.call( colors, 'red' );
  // var bindFunction = myCall2.bind(colorsBind);
  // bindFunction();
  myCall3.apply(msg,colorApply);
