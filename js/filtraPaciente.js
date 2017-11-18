var filtroCampo = document.querySelector('#filtro-campo');

filtroCampo.addEventListener('input', function(){
	var pacientes = document.querySelectorAll('.paciente');
	
	for (i=0; i < pacientes.length; i++){
		var paciente = pacientes[i],
			nome = paciente.querySelector('.info-nome').textContent;

		paciente.classList.remove('none');
		paciente.classList.remove('filtro');	

		if(this.value == '') continue;

		paciente.classList.add('filtro');
		
		var expressao = new RegExp(this.value, "i");	

		if(expressao.test(nome)){
			paciente.classList.remove('filtro');
		}

	};
});