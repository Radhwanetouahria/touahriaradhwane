/****************** Typing Animation ****************/

var tsyped = new Typed('.typing', {
    strings: ['', 'Geodesy', 'Photogrammetry', 'Remote Sensing', 'Geographic Information Systems'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,
})

/****************** Aside Navbar ****************/

const nav = document.querySelector('.nav'),
    navList = nav.querySelectorAll('li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    let a = navList[i].querySelector('a');
    a.addEventListener('click', function () {
        for (let i = 0; i < totalSection; i++) {
            allSection[i].classList.remove('back-section')
        }
        for (let h = 0; h < totalNavList; h++) {
            if (navList[h].querySelector('a').classList.contains('active')) {
                allSection[h].classList.add('back-section');
            }
            navList[h].querySelector('a').classList.remove('active')
        }
        this.classList.add('active');
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    })
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];
    document.querySelector('#' + target).classList.add('active');
}


/************** Nav Toggler **************/
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active');
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index');
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
})


const navTogglerBtn = document.querySelector('.nav-toggle'),
    aside = document.querySelector('.aside');
navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
// for (let i = 0; i < totalSection; i++){
    //     allSection[i].classList.toggle('open');
    // }
}

/************** Portfolio Lightbox **************/
const portfolioItems = document.querySelectorAll('.portfolio-item-inner');
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<div class="lightbox-content"><img src="" class="lightbox-img"><span class="lightbox-close">&times;</span></div>';
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('.portfolio-img img').getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.classList.add('open');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('open');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('open');
    }
});