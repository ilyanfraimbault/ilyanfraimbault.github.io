export function copyToClipboard(toCopy: string, message: string = 'Copied to clipboard') {
  const toast = useToast()
  navigator.clipboard.writeText(toCopy)
    .then(() => {
      toast.add({ title: message, color: 'success', icon: 'i-lucide-check-circle' })
    })
    .catch(() => {
      // Le presse-papier peut être refusé — contexte non sécurisé, permission
      // bloquée, navigateur restrictif. Sans ce message, la copie échouait en
      // silence et rien ne distinguait un succès d'un échec.
      toast.add({
        title: 'La copie a échoué',
        description: 'Ton navigateur a refusé l\'accès au presse-papier.',
        color: 'error',
        icon: 'i-lucide-clipboard-x'
      })
    })
}
