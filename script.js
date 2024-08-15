//how old am i 
setInterval(() => {
    document.getElementById("age").innerHTML = dayjs().diff('1999-06-19', 'year', true).toFixed(10);
}, 50);

//pretty stuff
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});