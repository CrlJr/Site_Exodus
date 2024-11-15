	let timer2 = setInterval(ManterAberto, 1000);
	// Seleciona o campo de texto e a caixa de pesquisa
	const searchText = document.querySelector('.search-text');
	const searchBox = document.querySelector('.search-box');
			
	function ManterAberto(){
		// Verifica se há texto no campo e mantém a barra expandida
		if (searchText.value.length > 0) {
			searchBox.classList.add('expanded');
		} else {
			searchBox.classList.remove('expanded');
		}
	}