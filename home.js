$(document).ready(function(){
        $('.content').click(function(){
          $('.content').toggleClass("heart-active")
          $('.text').toggleClass("heart-active")
          $('.numb').toggleClass("heart-active")
          $('.heart').toggleClass("heart-active")
        });
      });


function toggle(hhh){
	var trailer = document.querySelector('.trailer');
	var video = document.querySelector('video');
	video.src = hhh;
	trailer.classList.toggle('active');
	video.currentTime = 0;
	video.pause();

}