document.querySelectorAll('.bubble').forEach(bubble => {
    bubble.addEventListener('click', function(event) {
        event.preventDefault();
        const id = this.getAttribute('href').substring(1);
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
