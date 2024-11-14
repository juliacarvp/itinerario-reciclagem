const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.1 }); 

const images = document.querySelectorAll('.imagens-reciclados img');
images.forEach(image => {
    observer.observe(image);
});

const animatedText = document.querySelector('.animated-text');
const animatedTexts = document.querySelectorAll('.animated-text');

animatedTexts.forEach(text => observer.observe(text));
document.querySelector('.ecoimpacto a').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const ecoimpactoContainer = document.querySelector('.ecoimpacto-container');
    const logo = document.querySelector('.ecoimpacto-logo');
    const ecoimpactoText = document.querySelector('.ecoimpacto');
    const navbar = document.querySelector('.navbar');

    ecoimpactoText.style.transform = `translateX(${Math.min(scrollPosition / 1, 10)}px)`;

    if (scrollPosition > 50) {
        logo.style.opacity = 1;
    } else {
        logo.style.opacity = 0;
    }
	
	if (scrollPosition > 50) {
        navbar.classList.add('box-shadow');
    } else {
        navbar.classList.remove('box-shadow');
    }
});