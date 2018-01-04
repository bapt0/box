setTimeout(function () {
  $('.title').css('transition', '2s');
  $('.title').css('top', '0px');
}, 100);

// IE
function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer
    {
      return true
    }
    else  // If another browser
    {
      return false
    }
    return false;
}

if(msieversion()) {
  $('<a href="http://chamalotbis.byethost17.com/box.php">Accéder à la boîte</a>').appendTo('#content')
}

document.addEventListener('contextmenu', event => rightClick(event))
function rightClick() {
  event.preventDefault()
}
