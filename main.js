const menu = document.querySelector('.header__toggle');
/**Selecciona el elemento con la clase "header__toggle" utilizando document.querySelector().Lo guardamos en la variable toggleMenu, para poder manipularlo.*/

const section = document.querySelector('section');
/**selecciona el elemento <section> con document.querySelector(). Lo guardamos en la variable section*/

/*Función para cambiar el menú que se ejecutará cuando se active el evento de clic en el elemento con la clase "header__toggle"*/
const toggleMenu = () => {
  menu.classList.toggle('isActivated');
  /*Si el elemento tiene la clase "isActivated", se la quitará y si no la tiene, se le añadirá y cambiamos la visibilidad del elemento cuando se hace clic*/

  section.classList.toggle('isActivated');
  /*Hace lo mismo que lo anterior, y lo aplica a la variable SECTION para cambiar el estado visual cuando se hace clic en el menú*/


}
