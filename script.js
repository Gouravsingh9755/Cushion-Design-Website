
var menu = document.querySelector("h6")
var drop = document.querySelector(".menu_down")


var flag = 0


menu.addEventListener("click",function(){


    if(flag==0){

    
        drop.style.top= "0%"
        menu.innerHTML= `<i class="ri-close-line"></i>`
        menu.style.fontSize= "5vw"
        // menu.style.display = `hsxvc`
        
        flag = 1

    }

    else{

    
        drop.style.top= "-100%"
        // menu.style.display = "initial"
        menu.innerHTML=`<i class="ri-menu-3-line"></i>`



        flag = 0

    }


})
    




