
function informacio() {

  var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if(es_chrome){
            alert("El navegador que se está utilizando es Chrome");
  }
  var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  if(es_firefox){
        alert("El navegador que se está utilizando es Firefox");
  }
}
