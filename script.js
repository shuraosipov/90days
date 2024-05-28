document.addEventListener('DOMContentLoaded', () => {
    const boxesContainer = document.getElementById('boxes');
    const numberOfDays = 90;
    const today = new Date();

    for (let i = 0; i < numberOfDays; i++) {
        const box = document.createElement('div');
        box.className = 'box';
        
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        box.textContent = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        box.addEventListener('click', () => {
            box.classList.toggle('green');
        });

        boxesContainer.appendChild(box);
    }
});

