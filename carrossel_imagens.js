	let currentInd = 0; // Índice do primeiro slide visível
	const sli = document.querySelector(".slides");
	const totalSli = document.querySelectorAll(".slide").length;
	const visibleSli = 3; // Quantidade de slides visíveis ao mesmo tempo

	function mudarSli(direction) {
		// Calcula o novo índice do primeiro slide visível
		currentInd += direction;

		// Garante que o índice permaneça dentro dos limites
		if (currentInd < 0) {
			currentInd = totalSli - visibleSli;
		} else if (currentInd > totalSli - visibleSli) {
			currentInd = 0;
		}

		// Move o contêiner de slides
		const offset = -(currentInd * (100 / visibleSli)); // Calcula a posição de deslocamento
		sli.style.transform = `translateX(${offset}%)`;
	}
