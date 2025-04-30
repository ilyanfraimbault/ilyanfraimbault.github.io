document.addEventListener('DOMContentLoaded', function() {
  // Add subtle parallax effect to the background
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    document.body.style.backgroundPosition = `calc(50% + ${moveX}px) calc(50% + ${moveY}px)`;
  });

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

  // Add a subtle animation to skill items when they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.skills-list li').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(item);
  });
});
