//swiper js testimonial section
const swiper= new Swiper('.swiper',{
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

//open and close nav menu
const menuBtn =document.querySelector("#menu-btn");
const closeBtn =document.querySelector("#close-btn");
const menu =document.querySelector("nav .container ul");

//change active class to clicked nav items
const navItems = document.querySelectorAll('nav ul li');

//remove Active Class from other items
const removeActiveClass= () => {
    navItems.forEach(item => {
        const link=item.querySelector('a');
        link.classList.remove('active');
    })
}
 
//add active class to clicked nav item
navItems.forEach(item => {
    const link=item.querySelector('a');
    link.addEventListener('click', () => {
        removeActiveClass();
        link.classList.add('active');
    })    
})

//change nav bar style on scroll 
window.addEventListener("scroll", () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})