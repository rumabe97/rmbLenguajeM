var aux =0;

function Aparecer() {
          document.getElementById('login').style.visibility="visible";
}

function Mano(){
		  document.getElementById('gmail').style.cursor = "pointer";
		  document.getElementById('muchosiconos').style.cursor = "pointer";
}	

function Desaparecer() {
		if(aux==2){
          document.getElementById('login').style.visibility="hidden";
		  aux=0;
		}
		aux++;
}
