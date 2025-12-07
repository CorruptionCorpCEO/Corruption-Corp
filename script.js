document.addEventListener('DOMContentLoaded', () => {
    
    // --- Configuration ---
    // Ensure you have these images or change to color gradients for testing
    const sites = [
        {
            title: "PHRYSK",
            desc: "Graphic rugs for Melbourne CBD",
            url: "https://phrysk.com",
            img: "images/phryskslide.png",
            // NEW PROPERTY: Add the path to your title image/graphic
            titleImg: "images/phrysk_title.png" 
        },
        {
            title: "sloe jin",
            desc: "Experimental rap artist making distorted electronic-inspired hip-hop",
            url: "https://sloejin.net",
            img: "images/sloejinslide.png",
            // NEW PROPERTY
            titleImg: "images/sloejin_title.png"
        },
        {
            title: "GRIT",
            desc: "A weird little magazine...",
            url: "./wip",
            img: "images/gritslide.png",
            // NEW PROPERTY
            titleImg: "images/grit_title.png"
        },
        {
            title: "CONTACT",
            desc: "Get in touch for any inquiry",
            url: "https://www.instagram.com/corruptioncorporation/",
            img: "images/contactslide.png",
            // NEW PROPERTY
            titleImg: "images/contact_title.png"
        }
    ];

    let currentIndex = 0;

    const slots = [
        document.getElementById('slot-0'),
        document.getElementById('slot-1'),
        document.getElementById('slot-2'), 
        document.getElementById('slot-3'),
        document.getElementById('slot-4')
    ];
    
    // CHANGED: Get the image element instead of the h1
    const titleImgEl = document.getElementById('category-image'); 
    const descEl = document.getElementById('info-desc');
    const indexEl = document.getElementById('info-index');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const track = document.querySelector('.carousel-track');

    const getWrappedIndex = (index, length) => {
        return ((index % length) + length) % length;
    };

    const updateDisplay = () => {
        const total = sites.length;
        const activeSite = sites[currentIndex];

        // Animate text changes
        titleImgEl.style.opacity = 0; // Use image element
        descEl.style.opacity = 0;

        setTimeout(() => {
            // CHANGED: Set the image source instead of text content
            titleImgEl.src = activeSite.titleImg; 
            titleImgEl.alt = activeSite.title; // Keep alt for accessibility
            
            descEl.textContent = activeSite.desc;
            indexEl.textContent = `${currentIndex + 1}/${total}`;
            
            titleImgEl.style.opacity = 1;
            descEl.style.opacity = 1;
        }, 150);

        // Update Slots
        const offsets = [-2, -1, 0, 1, 2];
        
        slots.forEach((slot, i) => {
            const offset = offsets[i];
            const siteIndex = getWrappedIndex(currentIndex + offset, total);
            const siteData = sites[siteIndex];

            // Set Background
            // For real images use: slot.style.backgroundImage = `url(${siteData.img})`;
            slot.style.backgroundImage = `url(${siteData.img})`;
            
            // Logic for the center slot
            if (i === 2) { 
                slot.href = siteData.url;
                slot.style.cursor = "pointer";
            } else {
                slot.removeAttribute('href');
                slot.style.cursor = "default";
            }
        });
    };

    const nextSlide = () => {
        currentIndex = getWrappedIndex(currentIndex + 1, sites.length);
        updateDisplay();
    };

    const prevSlide = () => {
        currentIndex = getWrappedIndex(currentIndex - 1, sites.length);
        updateDisplay();
    };

    // --- Events ---
    btnNext.addEventListener('click', nextSlide);
    btnPrev.addEventListener('click', prevSlide);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Swipe Support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }, {passive: true});

    // Click side slots to nav
    slots[1].addEventListener('click', prevSlide);
    slots[3].addEventListener('click', nextSlide);

    // Init
    updateDisplay();
});