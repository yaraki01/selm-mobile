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