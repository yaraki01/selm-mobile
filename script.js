const menu = document.getElementById('menu')
const aside = document.getElementById('aside')
const divmenu = document.getElementById('div-menu')


menu.addEventListener('click', function(){
    if(divmenu.style.height == '90px'){
        divmenu.style.height = '5000px'
        aside.style.animation = 'aside-apper 0.7s ease-in-out'
    }
    else{
         aside.style.animation = 'aside-desaper 0.7s ease-in-out'
         divmenu.style.height = '90px'
        }   
})
const instagram = document.querySelector('.img-instagram')
const whatsapp = document.querySelector('.img-whatsapp')

instagram.addEventListener('click', function(){
    window.location.href = 'https://www.instagram.com/vemserselm/'
})
whatsapp.addEventListener('click', function(){
    window.location.href = 'https://api.whatsapp.com/send?l=pt-BR&phone=558335762568'
})