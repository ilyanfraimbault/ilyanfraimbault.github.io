document.addEventListener('DOMContentLoaded', function() {
  // Removed parallax effect for performance

  // Add hover effect and click functionality to project items
  const projectItems = document.querySelectorAll('.project');
  projectItems.forEach(item => {
    // Find the hidden link
    const link = item.querySelector('a');
    if (link && link.href) {
      item.style.cursor = 'pointer';

      // Make the entire project item clickable
      item.addEventListener('click', (event) => {
        // Add a click effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
          item.style.transform = '';
          window.location.href = link.href;
        }, 150);
      });
    }
  });

  // Also make the "À propos de moi" section clickable
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    const link = aboutSection.querySelector('a');
    if (link && link.href) {
      aboutSection.style.cursor = 'pointer';

      aboutSection.addEventListener('click', (event) => {
        // Add a click effect
        aboutSection.style.transform = 'scale(0.98)';
        setTimeout(() => {
          aboutSection.style.transform = '';
          window.location.href = link.href;
        }, 150);
      });
    }
  }

  // Removed animations for performance
});
