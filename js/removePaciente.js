var tabela = document.querySelector('#tabela-pacientes');

tabela.addEventListener('dblclick', function(event){
	event.target.parentNode.classList.add('remove');

	setTimeout(function(){
		event.target.parentNode.remove();
	}, 500);
});