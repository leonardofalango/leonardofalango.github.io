
var pesq = document.getElementById("search-box");
//const pagesId = ['home', 'channel', 'games', 'about', 'contact']
const pagesId = ['home', 'channel', 'games', 'contact']


function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}


window.onscroll = function() {myFunction()};

function myKeyPress(e){
  var keynum;
  e = e || window.event;
  var index = window.pageYOffset / window.innerHeight
    
  // arrow down code

  if(e.keyCode == '40') { // IE                  
    index++;
  }

  // arrow up code

  if(e.keyCode == '38') { // IE                  
    index--;
  }
  window.location.href = "#" + pagesId[index]
}