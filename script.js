
const pressKey = document.getElementById('press-key');

window.addEventListener('keydown', (e) => {
    console.log(e);
    pressKey.innerHTML = `

        <div class="pressKey">
            ${e.key}
        </div>
        
        <div class="card">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key<small>
        </div>

        <div class="card">
            ${e.keyCode}
            <small>event.keyCode</small>
        </div>
        
        <div class="card">
            ${e.code}
            <small>event.code</small>
        </div
    
    `
});