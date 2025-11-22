// script.js — interactions: photo preview, cert uploads, CV upload/download, modal
(() => {
  // Script simplifié : ouvre les images présentes dans la galerie dans un modal.
  const certGallery = document.getElementById('certGallery')

  function openImageModal(url, title) {
    const modal = document.createElement('div')
    modal.style.position = 'fixed'
    modal.style.inset = 0
    modal.style.background = 'rgba(0,0,0,0.7)'
    modal.style.display = 'flex'
    modal.style.alignItems = 'center'
    modal.style.justifyContent = 'center'
    modal.style.zIndex = 9999
    const wrapper = document.createElement('div')
    wrapper.style.maxWidth = '90%'
    wrapper.style.maxHeight = '90%'
    wrapper.style.background = '#fff'
    wrapper.style.borderRadius = '10px'
    wrapper.style.overflow = 'auto'
    wrapper.style.padding = '12px'
    const img = document.createElement('img')
    img.src = url
    img.alt = title
    img.style.maxWidth = '100%'
    img.style.maxHeight = '80vh'
    img.style.display = 'block'
    wrapper.appendChild(img)
    const close = document.createElement('button')
    close.textContent = 'Fermer'
    close.style.marginTop = '8px'
    close.className = 'btn outline'
    close.addEventListener('click', () => document.body.removeChild(modal))
    wrapper.appendChild(close)
    modal.appendChild(wrapper)
    modal.addEventListener('click', (ev) => { if (ev.target === modal) document.body.removeChild(modal) })
    document.body.appendChild(modal)
  }

  // Attache les click handlers aux images déjà présentes
  if (certGallery) {
    const imgs = certGallery.querySelectorAll('img')
    imgs.forEach(img => {
      img.style.cursor = 'pointer'
      img.addEventListener('click', () => openImageModal(img.src, img.alt || 'Certificat'))
    })
  }

  // Aucun upload ou modification côté client — tout est chargé depuis les fichiers locaux fournis.
})()
