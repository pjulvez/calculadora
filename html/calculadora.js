window.onload = function(){
  pantalla=document.getElementById("textoPantalla");

}
x="0";
numPantalla=1;
coma=0;
numEspera=0;
operacio="no";


function numero(num2) {

  if(x.length >= 5){
    alert("no pot haber tants operants");
    esborratTotal();
  }




         if (x=="0" || numPantalla==1  ) {


            pantalla.innerHTML=num2;
            x=num2;
            if (num2==".") {
               pantalla.innerHTML="0.";
               x=num2; //
               coma=1;
            }


           }
           else {
               if (num2=="." && coma==0) {
                   pantalla.innerHTML+=num2;
                   x+=num2;
                   coma=1;
               }

               else if (num2=="." && coma==1) {}

               else {
                   pantalla.innerHTML+=num2;
                   x+=num2
               }
            }
            numPantalla=0
         }
function operar(tipusOperacio) {

           igual()
           numEspera=x
           operacio=tipusOperacio;
           numPantalla=1;
         }
function igual() {
        if(x == 0){
          alert("has posat algun operant que no te valor");
        }
         if (operacio=="no") {
              pantalla.innerHTML=x;

          }
         else {
                cadenaSolucio=numEspera+operacio+x;
                solucio=eval(cadenaSolucio)
                pantalla.innerHTML=solucio
                x=solucio;
                operacio="no";
                numPantalla=1;
              }
        }
function arrel() {
           x=Math.sqrt(x)
           pantalla.innerHTML=x;
           operacio="no";
           numPantalla=1;
       }
function sin() {
          x=Math.sin(x)
          pantalla.innerHTML=x;
          operacio="no";
          numPantalla=1;
        }
function cos() {
              x=Math.cos(x)
              pantalla.innerHTML=x;
              operacio="no";
              numPantalla=1;
            }
function exp() {
              x=Math.exp(x)
              pantalla.innerHTML=x;
              operacio="no";
              numPantalla=1;
          }
function percentatge() {
           x=x/100
           pantalla.innerHTML=x;
           igualar()
           numPantalla=1
         }
function oposat() {
           numero=Number(x);
           numero=-numero;
           numero=String(numero);
           pantalla.innerHTML=x;
         }

function esborrarUltim(){
           xifre=x.length;
           esborrar=x.substr(xifre-1,xifre)
           x=x.substr(0,xifre-1)
           if (x=="") {x="0";}
           if (esborrar==".") {coma=0;}
           pantalla.innerHTML=x;
         }
function esborratParcial() {
          pantalla.innerHTML=0;
          x=0;
          coma=0;
        }
function esborratTotal() {
           pantalla.innerHTML=0;
           x="0";
           coma=0;
           numEspera=0
           operacio="no"
       }
function data(){
         var d = new Date();

       alert("Avui es dia "+ d.getDate()+ " del mes de " + (d.getMonth() +1)
         +  " de l'any "+d.getFullYear() + " i son les "+d.getHours()+":"+d.getMinutes()
          + ":" +d.getSeconds());
      }
