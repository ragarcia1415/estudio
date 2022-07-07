function traerDatos(){
	var request = new XMLHttpRequest();
	    request.onreadystatechange = function() {
	        if (request.readyState == 4 && request.status == 200) {
	           let datos = JSON.parse(this.responseText);
	           let res = document.getElementById("tab");
	           for (let item of datos) {
	            res.innerHTML += `
	            <tr>
	            	<td>${item.titulo}</td>
	            	<td>${item.artista}</td>
	            </tr>`
	           }
	        }else{
	        	document.getElementById("texto").innerHTML = "Espere......";
	       }
	    };
	request.open("GET", "datos.json", true);
	request.send();
}