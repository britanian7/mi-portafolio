document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.querySelector('[name="theme"]');
  const toggleMov = document.querySelector('.toggle__mov');

  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleMov.classList.add('dark');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', function() {
    if (themeToggle.checked) {
      document.body.classList.add('dark-theme');
      toggleMov.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      toggleMov.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
})
