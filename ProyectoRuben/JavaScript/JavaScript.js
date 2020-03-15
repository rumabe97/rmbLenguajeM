function Aparecer () {
          document.getElementById('zona1').style.visibility="visible";
          document.getElementById('zona2').style.visibility="hidden";
		  }
function Desaparecer () {
          document.getElementById('zona1').style.visibility="hidden";
          document.getElementById('zona2').style.visibility="visible";
      }
	  
function hora (){
		document.getElementById('hora').innerHTML = Date();
}

function alerta(){
		alert('Hola ♥♥♥♥');
}

 function dibujo() {

    var milienzo = document.getElementById("canvas01");
    var micontexto = milienzo.getContext("2d");
    var i=0;
    var x=5;
    var y=5;
    var ancho = 390;
    var alto = 290;

    for (i=0;i<=25;i++) {

        micontexto.strokeStyle="#"+Math.floor(Math.random()*16777215).toString(16);
        micontexto.strokeRect(x,y,ancho,alto);
        x=x+5;
        y=y+5;
        ancho=ancho-10;
        alto=alto-10;

    }

}