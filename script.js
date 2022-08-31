const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar-menu');

/* Scroll animations */
AOS.init();

/* Menu click events */
menuBtn.addEventListener('click', sidebarOpen);
menuBtnMobile.addEventListener('click', sidebarOpen);

/* Open Sidebar Functions */
function sidebarOpen() {
   /* Change sidebar position */
   sidebar.style.right = "0";
   /* backdrop show function */
   backdrop.style.display = "block";
   /* Smooth backdrop transition */
   setTimeout(() => {
      backdrop.style.opacity = "1";
   }, 50);
   /* Disables scroll on body */
   document.body.classList.add('sidebar-open-body');
}

/* Close button click event */
close.addEventListener('click', () => {
   /* Changes sidebar position */
   sidebar.style.right = "-20em";
   /* Hides backdrop with a smooth transition */
   backdrop.style.opacity = "0";
   setTimeout(() => {
      backdrop.style.display = "none";
   }, 300);
   /* Make the body scrollable again */
   document.body.classList.remove('sidebar-open-body')
});
