const carouselSlide = document.querySelector('.slide-img');
const carouselImages = document.querySelectorAll('.slide-img img');
const prevBtn = document.querySelector('#prevbtn');
const nextBtn = document.querySelector('#nextbtn');

let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = 'translateX('+ (-size * counter) +'px)';

nextBtn.addEventListener('click',()=>{
	if (counter >= carouselImages.length-1) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform = 'translateX('+ (-size* counter) +'px)';
});
prevBtn.addEventListener('click',()=>{
	if(counter <0) return;
	carouselSlide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform = 'translateX('+ (-size*counter) +'px)';
});
carouselSlide.addEventListener('transitionend',()=>{
	if(carouselImages[counter].id === 'lastclone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length -2 ;
		carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
	}
	if(carouselImages[counter].id === 'firstclone') {
		carouselSlide.style.transition = "none";
		counter = carouselImages.length - counter;
		carouselSlide.style.transform = 'translateX('+ (-size * counter)+'px)';
}
});
