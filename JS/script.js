function addClassesToActiveSlide(swiper) {
	console.log(swiper);
	var activeSlideElem = swiper.slides[swiper.activeIndex];
	console.log(activeSlideElem);
	swiper.slides.forEach(function (e) {
		e.classList.remove("is-active");
	});
	activeSlideElem.classList.add("is-active");
}

var slider = new Swiper(".swiper", {
	speed: 1000,
	loop: true,
	autoplay: {
		delay: 5000
	},
	on: {
		init: addClassesToActiveSlide,
		transitionEnd: addClassesToActiveSlide
	}
});

