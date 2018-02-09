// validar campo de texto mayor a 2 caracteres: boton submit activado/desactivado
$('.txt').keyup(function(){
	var string = $('.txt').val();
	if (string.length > 2) {
		$('.submit').removeAttr('disabled');
	} else {
		$('.submit').attr('disabled', 'disabled');
	}
})


// Autocompletar
var input = document.getElementById("campo");
var ajax = new XMLHttpRequest();
ajax.open("GET", "books-schema.json", true);
ajax.onload = function() {
	var list = JSON.parse(ajax.responseText).data.map(function(i) { return i.title; });
	new Awesomplete(input,{ list: list, minChars: 3, maxItems: 7 });
};
ajax.send();



// controller app
var app = angular.module('finderChallenge', []);
app.controller('Controlador', function($scope, $http){
	$http.get('books-schema.json')
		.then(function(response){
			console.log(response);
			$scope.libros = response.data;
		})
})