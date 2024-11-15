	//Variáveis.
	let slideIndex = 1;
	let onOff = false;
	let timer = setInterval(ChangeSlides, 8000);
			
	//Chama a função para atualizar os slides.
	showSlides(slideIndex);
			
	//Passa os slides para frente.
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}
			
	//Volta os slides para trás.
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}
			
	//Atualiza todas as informações em relação aos slides e muda de slide.
	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
		if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";  
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex-1].style.display = "block";  
		dots[slideIndex-1].className += " active";
		timer;
	}
			
	//Se não tiver clicado no botão de mudar slides, envia 1 para mudar de slide(verifica se clicou 
	//através da variável onOff).
	//Se tiver clicado no botão desativa o timer original, cria um novo e ao acabar o tempo muda o slide e
	//reseta a variável onOff.
	function ChangeSlides(){
		if(onOff == false){
			plusSlides(1);
		}
		else if(onOff == true){
			clearInterval(timer);
			timer = setInterval(ChangeSlides, 8000);
			onOff = false;
		}
					
	}