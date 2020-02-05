function Aparecer () {
          document.getElementById('zona1').style.visibility="visible";
          document.getElementById('zona2').style.visibility="hidden";
		  }
function Desaparecer () {
          document.getElementById('zona1').style.visibility="hidden";
          document.getElementById('zona2').style.visibility="visible";
      }
	  
function hora (){
		document.getElementById('demo').innerHTML = Date();
}