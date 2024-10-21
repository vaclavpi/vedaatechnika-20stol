function showContent(index) {
    const contents = document.querySelectorAll('.content');
    contents.forEach((content, i) => {
        if (i === index) {
            content.style.display = 'block';
            setTimeout(() => content.classList.add('animate'), 50);
        } else {
            content.style.display = 'none';
            content.classList.remove('animate');
        }
    });
}
