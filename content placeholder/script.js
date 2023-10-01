const header = document.querySelector('#header')
const title = document.querySelector('#title')
const excerpt = document.querySelector('#excerpt')
const profile_img = document.querySelector('#profile-img')
const fullName = document.querySelector('#fullName')
const date = document.querySelector('#date')
console.log(date)
const animated_bgs = document.querySelector('.animated-bg')
const animated_bg_texts = document.querySelector('.animated-bg-text')

setTimeout(getData, 2000);

function getData(){
    header.innerHTML='<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="Product">'
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quam!'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/33.jpg" alt="picture">'
    fullName.innerHTML= 'John Doe'
    date.innerHTML = '26 sep 2023'


    animated_bgs.forEach(element => element.classList.remove('animated-bg'));
    animated_bg_texts.forEach(element => element.classList.remove('animated-bg-text'));
}