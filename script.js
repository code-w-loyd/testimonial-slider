const prev = document.querySelector('.prev');
const next = document.querySelector('.next')
const slides = document.querySelector('.slide')
const one = document.querySelector('.one');
const two = document.querySelector('.two');

prev.addEventListener('click', () => {
    
    if(two.style.display = 'block'){
        two.style.display = 'none';
        one.style.display = 'block';
    }
    else{
        one.style.display = 'block'
    }
    
})

next.addEventListener('click',()=>{

    if(two.style.display = 'block'){
        one.style.display = 'none'
    }
    else{
        two.style.display = 'block';
        one.style.display = 'none';
    }
})