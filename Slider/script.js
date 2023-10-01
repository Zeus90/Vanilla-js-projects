const slideContainer = document.querySelector('.slide-container')
const slidRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const btnUp = document.querySelector('.up-btn')
const btnDown = document.querySelector('.down-btn')
const slidesLength = slidRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

btnUp.addEventListener('click', () => changeSlide('up'))
btnDown.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction)=>{
    const sliderHeight = slideContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++
        console.log(activeSlideIndex)
        if (activeSlideIndex > slidesLength -1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down'){
        activeSlideIndex--
        console.log(activeSlideIndex)
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    }

    slidRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}