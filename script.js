const menuBtn = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
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
closeBtn.addEventListener('click', () => {
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

/* Custom scroll event that changes the roof image */
const text = document.querySelector('.roof-text');
const roofImg = document.querySelector('.banner-img');

/* Adds scroll event to the document */
window.addEventListener('scroll', () => {
   /* When the text element is animated */
   if (text.classList.contains('aos-animate')) {
      /* Show the second roof image */
      roofImg.classList.add('roof-2');
      /* When the animation is removed */
   } else {
      /* Reverts back to first image */
      roofImg.classList.remove('roof-2');
   }
});
