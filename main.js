let circle = document.querySelector('.circle');
let moveby = 10;

window.addEventListener('load', () => {
    circle.style.position = 'absolute';
    circle.style.left = '0px';
    circle.style.top = '0px';
});

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveby + 'px';
            break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveby + 'px';
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveby + 'px';
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveby + 'px';
            break;
    }
});