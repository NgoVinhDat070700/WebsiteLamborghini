document.addEventListener("DOMContentLoaded",function(){
    var nut = document.querySelectorAll('div.nut ul li');
    // truy xuat phan tu cac nut
    var slide = document.querySelectorAll('.slide ul li');
    // truy xuat phan tu cac slide
    for(var i = 0; i < nut.length; i++){
        nut[i].addEventListener('click',function(){
            for(var i = 0; i < slide.length; i++  )
            {
                slide[i].classList.remove('hienra');
                // Bo cac class hienra
            }
 
            var idcuaslide = this.getAttribute('data-tendata');
            // Lay id cua tung slide bang thuoc tinh data cua html 5;
            var slidenay = document.getElementById(idcuaslide);
            slidenay.classList.add('hienra');
        })
    }
},false)