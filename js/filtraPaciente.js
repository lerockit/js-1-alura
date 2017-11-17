var filtroCampo = document.querySelector('#filtro-campo');

filtroCampo.addEventListener('input', function(){
	var pacientes = document.querySelectorAll('.paciente');
	
	if(this.value.length > 0){

		for (var i = 0; i < pacientes.length; i++){
			var paciente = pacientes[i];
			var nome = paciente.querySelector('.info-nome').textContent;

			if(this.value != nome){
				paciente.classList.add('filtro');
				setTimeout(function(){
					paciente.classList.add('out');
				}, 500);
			}else{
				console.log(paciente);
				paciente.classList.remove("out");
			};
		};		
	};
});