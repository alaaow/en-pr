const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');
const rootElement = document.documentElement;

// استرجاع الوضع المحفوظ مسبقاً إن وُجد
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light Mode';
}

// التبديل عند الضغط على الزر
themeToggle.addEventListener('click', () => {
    const isDark = rootElement.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        rootElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Dark Mode';
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Light Mode';
    }
});