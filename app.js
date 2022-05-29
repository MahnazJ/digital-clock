const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();

    const hours = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();

    const html = `
    <span>${hours}</span> :
    <span>${mins}</span> : 
    <span>${sec}</span> 
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);



let loader = document.querySelector('#loader');

function loadNow(opacity) {
    if (opacity <= 0) {
        displayContent();
    } else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
            loadNow(opacity - 0.04);
        }, 50);
    }
}

function displayContent() {
    loader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    loader = document.getElementById('loader');
    loadNow(1);
});