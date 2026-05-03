import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Accueil',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Projets',
  icon: 'i-lucide-folder',
  to: '/projects'
}, {
  label: 'Portfolio d\'apprentissage',
  icon: 'i-lucide-graduation-cap',
  to: '/portfolio-apprentissage'
}, {
  label: 'À propos',
  icon: 'i-lucide-user',
  to: '/about'
}]
