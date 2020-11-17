const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav .nav-list li');


    burger.addEventListener('click',()=>{
        nav.classList.toggle("main-nav-active")


    burger.classList.toggle('toggle');
    });

   
}


navSlide();

