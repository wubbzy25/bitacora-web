var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

	var btnAbrirPopup2 = document.getElementById('btn-abrir-popup2'),
	overlay2 = document.getElementById('overlay2'),
	popup2 = document.getElementById('popup2'),
	btnCerrarPopup2 = document.getElementById('btn-cerrar-popup2');

	var btnAbrirPopup3 = document.getElementById('btn-abrir-popup3'),
	overlay3 = document.getElementById('overlay3'),
	popup3 = document.getElementById('popup3'),
	btnCerrarPopup3 = document.getElementById('btn-cerrar-popup3');
	
	var btnAbrirPopup4 = document.getElementById('btn-abrir-popup4'),
	overlay4 = document.getElementById('overlay4'),
	popup4 = document.getElementById('popup4'),
	btnCerrarPopup4 = document.getElementById('btn-cerrar-popup4');

	var btnAbrirPopup5 = document.getElementById('btn-abrir-popup5'),
	overlay5 = document.getElementById('overlay5'),
	popup5 = document.getElementById('popup5'),
	btnCerrarPopup5 = document.getElementById('btn-cerrar-popup5');

	var btnAbrirPopup6 = document.getElementById('btn-abrir-popup6'),
	overlay6 = document.getElementById('overlay6'),
	popup6 = document.getElementById('popup6'),
	btnCerrarPopup6 = document.getElementById('btn-cerrar-popup6');

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnAbrirPopup2.addEventListener('click', function(){
	overlay2.classList.add('active');
	popup2.classList.add('active');
});

btnCerrarPopup2.addEventListener('click', function(e){
	e.preventDefault();
	overlay2.classList.remove('active');
	popup2.classList.remove('active');
});
btnAbrirPopup3.addEventListener('click', function(){
	overlay3.classList.add('active');
	popup3.classList.add('active');
});

btnCerrarPopup3.addEventListener('click', function(e){
	e.preventDefault();
	overlay3.classList.remove('active');
	popup3.classList.remove('active');
});

btnAbrirPopup4.addEventListener('click', function(){
	overlay4.classList.add('active');
	popup4.classList.add('active');
});

btnCerrarPopup4.addEventListener('click', function(e){
	e.preventDefault();
	overlay4.classList.remove('active');
	popup4.classList.remove('active');
});

btnAbrirPopup5.addEventListener('click', function(){
	overlay5.classList.add('active');
	popup5.classList.add('active');
});

btnCerrarPopup5.addEventListener('click', function(e){
	e.preventDefault();
	overlay5.classList.remove('active');
	popup5.classList.remove('active');
});

btnAbrirPopup6.addEventListener('click', function(){
	overlay6.classList.add('active');
	popup6.classList.add('active');
});

btnCerrarPopup6.addEventListener('click', function(e){
	e.preventDefault();
	overlay6.classList.remove('active');
	popup6.classList.remove('active');
});
