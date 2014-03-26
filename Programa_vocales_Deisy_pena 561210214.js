
var frase = prompt("Ingrese una frase pegada SIN ESPACIOS");
frase = frase.toLowerCase(); // convertimos la cadena de caracteres en minuscula
var pedacitos = frase.split(""); // la palabra la separamos por pedacitos para poder comparala con otra
var contadorA = 0;
var contadorE = 0;
var contadorI = 0;  // tenemos los contadores de cada vocal en 0 
var contadorO = 0;
var contadorU = 0;

var vocales = ['a','e','i','o','u']; // array para comparar si en la frase se encuentra algunas de estas vocales.

for (var i = 0; i < pedacitos.length; i++)  // recorre la frase	
{		
	if (pedacitos[i] == vocales[0]) // si el pedacito de frase contiene la vocal A
		 {
		 	contadorA++;  // agregamos al contador de A
		 }
	if (pedacitos[i] == vocales[1]) //si el pedacito de frase contiene la vocal E
	 	 {
	 	 	contadorE++; // agregamos al contador de E
	 	 }

	if (pedacitos[i] == vocales[2]) //si el pedacito de frase contiene la vocal I
	 	 {
	 	 	contadorI++; // agregamos al contador de I
	 	 }

	 if (pedacitos[i] == vocales[3]) //si el pedacito de frase contiene la vocal O
	 	 {
	 	 	contadorO++; // agregamos al contador de O
	 	 }

	 if (pedacitos[i] == vocales[4]) //si el pedacito de frase contiene la vocal U
	 	 {
	 	 	contadorU++; // agregamos al contador de U
	 	 }

}

alert("La frase " +frase+ " Contiene los siguientes numeros de vocales:");
alert("A = "+contadorA);
alert("E = "+contadorE);
alert("I = "+contadorI);
alert("O = "+contadorO);
alert("U = "+contadorU);