const selectBurger = document.getElementById('burger')
const selectMenuBox = document.getElementById('menuBox')
const selectMenu = document.getElementById('menu')

selectBurger.addEventListener('mouseenter', () => {
    selectMenu.classList.replace('fadeout', 'fadein')
    selectMenu.style.border = '4px solid white'
})

selectMenuBox.addEventListener('mouseleave', () => {
    selectMenu.classList.replace('fadein', 'fadeout')
    setTimeout(() => {
        if (selectMenu.classList.item(0) === 'fadeout')
        selectMenu.style.border = 'none'
    },400)
})

const backColor = document.getElementById('box').classList
const selectBtn = document.querySelectorAll('li')
const selectTxt = document.getElementById('text')

const changeColor = (enterBtn) => {
    
    const color = enterBtn.classList[0]
    backColor.replace(backColor.item(0), color)

    
    const getData = enterBtn.classList[0]
    selectTxt.innerText = getData

    Array.from(selectBtn).forEach(enterBtn => {
        enterBtn.firstElementChild.removeAttribute('checked')
        enterBtn.lastElementChild.classList.remove('checked')
    })
    enterBtn.firstElementChild.setAttribute('checked','checked')
    enterBtn.lastElementChild.classList.toggle('checked')
    
    selectMenu.classList.replace('fadein', 'fadeout')
    setTimeout(() => {
        selectMenu.style.border = 'none'
    }, 400)
}

selectBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeColor(button)
    })
})

window.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode
    selectBtn.forEach(button => {
        let getKey = button.getAttribute('data-key')
        if (keyCode == getKey){
            changeColor(button)
        }
    })
})