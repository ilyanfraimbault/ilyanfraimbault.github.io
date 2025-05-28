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

// Fonction pour gérer l'animation de fade-in au défilement
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Fonction pour ajouter les classes d'animation aux éléments
function initializeAnimations() {
    // Ajouter la classe fade-in aux sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
    });

    // Ajouter la classe scale-in aux projets
    document.querySelectorAll('.project').forEach(project => {
        project.classList.add('scale-in', 'glow-effect');
    });

    // Ajouter la classe glow-effect aux éléments de la liste de compétences
    document.querySelectorAll('.skills-list li').forEach(skill => {
        skill.classList.add('glow-effect');
    });
}

// Fonction pour animer les barres de progression des compétences
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

// Fonction pour ajouter des effets de survol au menu de navigation
function enhanceNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });
}

// Initialiser toutes les animations au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    handleScrollAnimations();
    animateSkillBars();
    enhanceNavigation();
});
