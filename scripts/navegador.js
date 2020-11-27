function informacio() {

  var es_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  if(es_chrome){
            alert("El navegador que se está utilizando es Chrome" + navigator.appVersion + "\n" +document.lastModifyed+"\n" +navigator.userAgent +"\n"+ window.location.pathname + "\n" + navigator.language);

  }
  var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  if(es_firefox){
        alert("El navegador que se está utilizando es Firefox"  + navigator.appVersion + "\n" +document.lastModifyed+"\n" +navigator.userAgent +"\n"+ window.location.pathname + "\n" + navigator.language);

  }
function configuracio(){
    sessionStorage.setItem('CoordenadesX', 'X');
    sessionStorage.setItem('CoordenadesX', 'Y');
    if (sessionStorage.getItem("autosave")) {
  // Restaura el contenido al campo de texto
  field.value = sessionStorage.getItem("autosave");
}

// Espera por cambios en el campo de texto
field.addEventListener("change", function() {
  // Almacena el resultado en el objeto de almacenamiento de sesión
  sessionStorage.setItem("autosave", field.value);
});
}

  }
