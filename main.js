window.onload = function () {

    function scroll() {
        const projectsNav = document.getElementById('nav-work')
        const aboutNav = document.getElementById('nav-about')
        const projectsSection = document.querySelector('.projects')
        const aboutSection = document.querySelector('.about-section')

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
    }

    scroll()
}