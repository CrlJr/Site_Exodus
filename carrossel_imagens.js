	let currentIndex = 0; // Índice do primeiro slide visível
	const slides = document.querySelector(".slides");
	const totalSlides = document.querySelectorAll(".slide").length;
	const visibleSlides = 3; // Quantidade de slides visíveis ao mesmo tempo

	function mudarSlide(direction) {
		// Calcula o novo índice do primeiro slide visível
		currentIndex += direction;

		// Garante que o índice permaneça dentro dos limites
		if (currentIndex < 0) {
			currentIndex = totalSlides - visibleSlides;
		} else if (currentIndex > totalSlides - visibleSlides) {
			currentIndex = 0;
		}

		// Move o contêiner de slides
		const offset = -(currentIndex * (100 / visibleSlides)); // Calcula a posição de deslocamento
		slides.style.transform = `translateX(${offset}%)`;
	}
