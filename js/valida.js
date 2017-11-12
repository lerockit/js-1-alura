function validaTudo(){
	for (i=0; i < pacientes.length; i++){

		var paciente = pacientes[i];

		var peso = paciente.querySelector('.info-peso').textContent;

		var altura = paciente.querySelector('.info-altura').textContent;

		var imc  = paciente.querySelector('.info-imc');

		if(peso <= 0 || peso >= 1000){
			paciente.querySelector('.info-peso').textContent = 'Peso Invalido';
			imc.textContent = '-';
			paciente.classList.add('error');
		} 

		else{

			if(altura <= 0 || altura >= 3){
				paciente.querySelector('.info-altura').textContent = 'Alutra Invaldia';
				imc.textContent = '-';
				paciente.classList.add('error');
			} 

			else{
				imc.textContent = calculaImc(peso, altura);
			};
		};
	};
};

function validaNovo(nome, peso, altura, gordura){
	
	var erros = [];

	if(nome == '' || peso == '' || altura == '' || gordura == ''){
		erros.push('Por favor preencha todos os campos!');
	} else{

		if(peso <= 0 || peso >= 500){
			erros.push('O peso inserido é Invalido');
		};

		if(altura <= 0 || altura >= 3){
			erros.push('A altura inserida é Invalida');
		};

	};
	
};