window.onload = function () {

  const toggle = document.querySelector('.toggle-nav')
  const close = document.querySelector('.close-nav')
  const menu = document.querySelector('.nav-mobile-menu')
  const contactShow = document.querySelector('.contact-show')
  const contactHide = document.querySelector('.contact-hide')
  const contactDetails = document.querySelector('.contact-details')

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector("header").style.top = "0";
    } else {
      document.querySelector("header").style.top = "-160px";
    }
    prevScrollpos = currentScrollPos;
  }

  function mobileNav() {

    toggle.addEventListener('click', () => {
      if (menu.style.display = 'none') {
        menu.style.display = 'flex'
        toggle.style.display = 'none'
        close.style.display = 'flex'
      }
    })

    close.addEventListener('click', () => {
      if (close.style.display = 'flex') {
        menu.style.display = 'none'
        close.style.display = 'none'
        toggle.style.display = 'flex'
      }
    })
  }

  function contactToggle() {

    contactShow.addEventListener('click', () => {
      if (contactDetails.style.dislay = 'none') {
        contactHide.style.display = 'flex'
        contactDetails.style.display = 'flex'
        contactShow.style.display ='none'
      }
    })

    contactHide.addEventListener('click', () => {
      if (contactDetails.style.display = 'flex') {
        contactDetails.style.display = 'none'
        contactHide.style.display = 'none'
        contactShow.style.display ='flex'
      }
    })

  }

  function scroll() {
    const projectsNav = document.getElementById('nav-work')
    const aboutNav = document.getElementById('nav-about')
    const skillsNav = document.getElementById('nav-skills')
    const projectsSection = document.querySelector('.projects')
    const aboutSection = document.querySelector('.about-section')
    const skillsSection = document.querySelector('.services')

    function scrollClick(target, endPoint) {

      target.addEventListener('click', () => {
        endPoint.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

    scrollClick(projectsNav, projectsSection)
    scrollClick(aboutNav, aboutSection)
    scrollClick(skillsNav, skillsSection)

  }

  scroll()
  mobileNav()
  contactToggle()

  ScrollReveal().reveal('.scroll-header, .profile-pic, .about-text, .contact-icons, .services, .service-bg-1, .service-bg-2, .service-bg-3, .scroll-header-2, .scroll-header-3, .project-grid', {
    delay: 200,
    duration: 600
  });

}