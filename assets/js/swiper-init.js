<script>
// ============================
// INIT SWIPERS (DESKTOP + MOBILE)
// ============================
document.addEventListener("DOMContentLoaded", function () {

    /* -------------------------
       DESKTOP: VIDEO SWIPER
       ------------------------- */
    window.desktopVideoSwiper = new Swiper(".doorbell_usp_swiper", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    /* -------------------------
       DESKTOP: TEXT STEPS
       ------------------------- */
    window.desktopStepsSwiper = new Swiper(".usp-swiper-steps", {
        direction: "vertical",
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        allowTouchMove: true,
    });

    // Sync two desktop swipers
    desktopStepsSwiper.on("slideChange", function () {
        desktopVideoSwiper.slideToLoop(desktopStepsSwiper.realIndex);
    });

    desktopVideoSwiper.on("slideChange", function () {
        desktopStepsSwiper.slideToLoop(desktopVideoSwiper.realIndex);
    });

    /* -------------------------
       MOBILE THUMBNAILS
       ------------------------- */
    window.mobileThumbs = new Swiper(".bsmartSliderdemo > .swiper[thumbsNavbar]", {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
        slideToClickedSlide: true,
    });

    /* -------------------------
       MOBILE MAIN VIDEO
       ------------------------- */
    window.mobileVideoSwiper = new Swiper(".mobile-swiper-app", {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false
        },
        thumbs: {
            swiper: mobileThumbs
        }
    });

    // ============================
    // SLIDER STAR MOVEMENT
    // ============================

    const sliderStar = document.querySelector('.slider-star');
    const stepSlides = document.querySelectorAll('.usp-swiper-steps .swiper-slide');
    const stepsContainer = document.querySelector('.usp-swiper-steps .swiper-wrapper');

    if (!sliderStar || !stepSlides.length) return;

    function moveStar(index) {
        const slide = stepSlides[index];
        if (!slide) return;

        const containerRect = stepsContainer.getBoundingClientRect();
        const slideRect = slide.getBoundingClientRect();

        const centerY = (slideRect.top - containerRect.top) + (slideRect.height / 2);

        sliderStar.style.top = centerY + "px";

        sliderStar.classList.add("active");
        clearTimeout(sliderStar._t);
        sliderStar._t = setTimeout(() => sliderStar.classList.remove("active"), 700);
    }

    // Apply star movement when Swiper is ready
    moveStar(desktopStepsSwiper.realIndex);

    desktopStepsSwiper.on("slideChange", function () {
        moveStar(desktopStepsSwiper.realIndex);
    });

    window.addEventListener("resize", function () {
        moveStar(desktopStepsSwiper.realIndex);
    });
});
</script>
