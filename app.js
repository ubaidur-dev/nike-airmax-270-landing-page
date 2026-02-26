
document.addEventListener('mousemove', (e) => {
    const glow = document.querySelector('.shoe-glow');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    
    glow.style.transform = `translate(${x * 30}px, ${y * 30 - 50}%)`;
});