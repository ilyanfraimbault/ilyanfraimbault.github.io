document.addEventListener('DOMContentLoaded', function() {
  // Gestionnaire pour les liens GitHub
  const githubLinks = document.querySelectorAll('.github-link');
  
  githubLinks.forEach(link => {
    // Ajouter un effet visuel au survol
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateX(5px)';
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = 'translateX(3px)';
      }
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = '';
      const icon = this.querySelector('i');
      if (icon) {
        icon.style.transform = '';
      }
    });
    
    // Assurer que le lien s'ouvre correctement
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const url = this.getAttribute('href');
      console.log('Ouverture du lien:', url);
      window.open(url, '_blank');
    });
  });
  
  // Ajouter une animation aux sections d'apprentissage critique
  const acSections = document.querySelectorAll('.ac-section');
  
  acSections.forEach(section => {
    section.addEventListener('mouseenter', function() {
      const img = this.querySelector('.ac-img');
      if (img) {
        img.style.transform = 'scale(1.02)';
      }
    });
    
    section.addEventListener('mouseleave', function() {
      const img = this.querySelector('.ac-img');
      if (img) {
        img.style.transform = '';
      }
    });
  });
});
