let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('moon');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

// Enable dark mode if saved preference exists
if (darkmode === "active") {
    enableDarkmode();
}

// Add event listeners to the theme switch
themeSwitch.addEventListener("change", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Scroll animations using Intersection Observer
const closeElements = document.querySelectorAll('.close');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
            entry.target.classList.remove("close");
            entry.target.classList.add("opening");
        } else {
            entry.target.classList.remove("opening");
            entry.target.classList.add("close");
        }
    });
}, {
    threshold: 0.5 // Animation triggers when 50% of the element is in view
});

closeElements.forEach(element => {
    observer.observe(element);
});
document.querySelectorAll('video').forEach(video => {
    video.addEventListener('play', () => console.log('Video is playing.'));
    video.addEventListener('pause', () => console.log('Video is paused.'));
});

