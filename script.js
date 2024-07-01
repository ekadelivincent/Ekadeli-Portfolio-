// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section')
  let currentSection = 0

  document.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
      // Scroll down
      if (currentSection < sections.length - 1) {
        currentSection++
      }
    } else {
      // Scroll up
      if (currentSection > 0) {
        currentSection--
      }
    }
    sections[currentSection].scrollIntoView({ behavior: 'smooth' })
  })
})
