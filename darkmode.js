let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('moon')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

    themeSwitch.addEventListener("change", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
    const closeElements = document.querySelectorAll('.close');

        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Element is in view:", entry.target);
                entry.target.classList.remove("close");
                entry.target.classList.add("opening"); 
                }
                else {
                    // Element is out of view
                    entry.target.classList.remove("opening");
                    entry.target.classList.add("close");
                }
            });
        }, {
          threshold: 0.5 //how many pixels will be showed before executing the animation
        });
        closeElements.forEach(element => {
            observer.observe(element);
            });
            