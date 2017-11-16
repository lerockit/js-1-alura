var button = document.querySelector('#adicionar-paciente');

button.addEventListener('click', function(event){
	event.preventDefault();

	var form = document.querySelector('#form-adiciona');

	var paciente = recebePaciente(form);

	var erros = validaNovo(paciente.nome, paciente.peso, paciente.altura, paciente.gordura);

	var ulError = document.querySelector('.adiciona-error');

	if (ulError != undefined){
		form.removeChild(ulError);
	};

	if (erros.length > 0){
		
		var addUl = document.createElement('ul');
		addUl.classList.add('adiciona-error');
		form.appendChild(addUl);
		
		erros.forEach(function(erro){
			var addli = document.createElement('li');
			addli.textContent = erro;
			addUl.appendChild(addli);
		});

		form.reset();

		return;
	};

	var pacienteTr = criaPaciente(paciente);

	form.reset();

});

function recebePaciente(form){
	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.altura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	};
	return paciente;
};

function criaDadoPaciente(dado, classe){
	var td = document.createElement('td');
	td.textContent = dado;
	td.classList.add(classe);
	return td;
};

function criaPaciente(paciente){
	var tr = document.createElement('tr');

	tr.appendChild(criaDadoPaciente(paciente.nome,'info-nome'));
	tr.appendChild(criaDadoPaciente(paciente.peso,'info-peso'));
	tr.appendChild(criaDadoPaciente(paciente.altura,'info-altura'));
	tr.appendChild(criaDadoPaciente(paciente.gordura,'info-gordura'));
	tr.appendChild(criaDadoPaciente(paciente.imc,'info-imc'));

	tr.classList.add('paciente');

	var corpoTabela = document.querySelector('#tabela-pacientes');

	corpoTabela.appendChild(tr);

	return tr;

};