let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
}




window.onscroll = () =>{
    navbar.classList.remove('active');
  
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
});

sr.reveal(`.home, .about`, {
    interval: 50
})