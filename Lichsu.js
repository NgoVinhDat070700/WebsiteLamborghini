

$(document).ready(function(){
            $(window).scroll(function(){
                if($(this).scrollTop()>200){
                    $('.scrollToTop').fadeIn();
                }
                else{
                    $('.scrollToTop').fadeOut();
                }
            });
            $('.scrollToTop').click(function() {
                $('html,body').animate({scrollTop: 0},1000)
            });
        });


        function actionToggle(){
            var action = document.querySelector('.action');
            action.classList.toggle('active')
        }