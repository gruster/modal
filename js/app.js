document.addEventListener("DOMContentLoaded", function() {

	var close = document.getElementById('modal__close'); // кнопка закрыть модальное окно
	var modal = document.querySelector('.modal'); // заносим в переменную модальное окно
	close.addEventListener("click", function (e) { // функция клика на кнопку закрыть
			e.preventDefault();
		modal.classList.toggle('active');
		});
	

});
