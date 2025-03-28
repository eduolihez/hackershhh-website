//toggle
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle i');
const html = document.documentElement;

//cargar tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
themeIcon.className = savedTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';

// cambiar tema
function toggleTheme() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    themeIcon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    localStorage.setItem('theme', newTheme);
}

themeToggle.addEventListener('click', toggleTheme);