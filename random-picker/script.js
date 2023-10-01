const tagsEl = document.querySelector("#tags")
const textArea = document.querySelector("textarea")

textArea.focus()

textArea.addEventListener('keyup', (e) =>{
    createTag(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(()=>{
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTag(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect(){
    const time = 30
    const interval = setInterval(()=>{
        const randTag = randomTag()

        highlightTag(randTag)

        setTimeout(()=>{
            unhighlightTag(randTag)
        }, 100)
    }, 100)

    setTimeout(() => {
        
        clearInterval(interval)
        const chosenTag = randomTag()
        highlightTag(chosenTag)
        
    }, time * 100);
}

function randomTag(){
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unhighlightTag(tag){
    tag.classList.remove('highlight')
}