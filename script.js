const selmimg = document.querySelector('.selm-img')

selmimg.addEventListener('click', function(){
    window.location.href = 'index.html'
})

const menu = document.getElementById('menu')
const aside = document.getElementById('aside')

menu.addEventListener('click', function(){
    if(aside.style.height == '0px'){
        aside.style.height = '645px'
        aside.style.animation = 'aside-move 0.7s ease-in-out'
    }
    else{
        aside.style.height = '0px'
        aside.style.animation = 'none'
    }
})

const h3_aside_1 = document.querySelector('.h3-aside-1')
const h3_aside_2 = document.querySelector('.h3-aside-2')
const h3_aside_3 = document.querySelector('.h3-aside-3')

const box_aside_1 = document.querySelector('.box-p-aside-1')
const box_aside_2 = document.querySelector('.box-p-aside-2')
const box_aside_3 = document.querySelector('.box-p-aside-3')
const box_aside_4 = document.querySelector('.box-p-aside-4')
const box_aside_5 = document.querySelector('.box-p-aside-5')
const box_aside_6 = document.querySelector('.box-p-aside-6')
const box_aside_7 = document.querySelector('.box-p-aside-7')
const box_aside_8 = document.querySelector('.box-p-aside-8')
const box_aside_9 = document.querySelector('.box-p-aside-9')

h3_aside_1.addEventListener('click', function(){
    if(box_aside_1.style.display == 'none'){
        box_aside_1.style.display ='block'
        box_aside_2.style.display ='block'
        box_aside_3.style.display ='block'
    }
    else{
        box_aside_1.style.display = 'none'
        box_aside_2.style.display = 'none'
        box_aside_3.style.display = 'none'
    }
})
h3_aside_2.addEventListener('click', function(){
    if(box_aside_4.style.display == 'none'){
        box_aside_4.style.display ='block'
        box_aside_5.style.display ='block'
    }
    else{
        box_aside_4.style.display = 'none'
        box_aside_5.style.display = 'none'
    }
})
h3_aside_3.addEventListener('click', function(){
    if(box_aside_6.style.display == 'none'){
        box_aside_6.style.display ='block'
        box_aside_7.style.display ='block'
         box_aside_8.style.display ='block'
          box_aside_9.style.display ='block'
    }
    else{
        box_aside_6.style.display = 'none'
        box_aside_7.style.display = 'none'
          box_aside_8.style.display = 'none'
        box_aside_9.style.display = 'none'
    }
})
box_aside_4.addEventListener('click', function(){
    window.location.href = 'https://www.google.com/maps/place/SELM+-+Sistema+de+Ensino+L%C3%A1pis+na+M%C3%A3o/@-7.1827787,-34.8646667,1077m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7ace9b4e60b3e9d:0x36d966101895d28!8m2!3d-7.1827787!4d-34.8646667!16s%2Fg%2F11ghff2r2l?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D'
})
box_aside_5.addEventListener('click', function(){
    window.location.href = 'https://www.google.com/maps/place/SELM+-+Sistema+de+Ensino+L%C3%A1pis+na+M%C3%A3o+2/@-7.1830463,-34.8635418,1077m/data=!3m2!1e3!4b1!4m6!3m5!1s0x7ace962f5e51ebf:0x4e0269a36f67b10e!8m2!3d-7.1830463!4d-34.8635418!16s%2Fg%2F11shxhc394?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D'
})

const whatsapp = document.querySelector('.whatsapp-img')
const instagram = document.querySelector('.instagram-img')

whatsapp.addEventListener('click', function(){
    window.location.href = 'https://api.whatsapp.com/send?l=pt-BR&phone=558335762568'
})
instagram.addEventListener('click', function(){
    window.location.href = 'https://www.instagram.com/vemserselm/'
})