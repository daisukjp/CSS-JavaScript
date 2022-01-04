const child = document.querySelector('.child');
const cb = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('inview')
            entry.target.classList.add('inview');
            // observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('inview');
        }
    });
    // alert('intersectiong');
}
const options = {
    root: null,
    rootMargin: "-300px 0px",
};
const io = new IntersectionObserver(cb, options);
io.observe(child);
// io.observe(child2);
// io.observe(child3);