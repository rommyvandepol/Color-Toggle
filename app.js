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

// FUNCTION: change color
const changeColor = (enterBtn) => {
    // change background color
    const color = enterBtn.classList[0]
    backColor.replace(backColor.item(0), color)

    // change background text
    const getData = enterBtn.classList[0]
    selectTxt.innerText = getData

    // check current radiobutton
    Array.from(selectBtn).forEach(enterBtn => {
        enterBtn.firstElementChild.removeAttribute('checked')
        enterBtn.lastElementChild.classList.remove('checked')
    })
    enterBtn.firstElementChild.setAttribute('checked','checked')
    enterBtn.lastElementChild.classList.toggle('checked')
    
    // close menu after click
    selectMenu.classList.replace('fadein', 'fadeout')
    setTimeout(() => {
        selectMenu.style.border = 'none'
    }, 400)
}

// EVENT: click button --> change color 
selectBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeColor(button)
    })
})

// EVENT: keypress --> change color
window.addEventListener('keypress', (event) => {
    let keyCode = event.keyCode
    selectBtn.forEach(button => {
        let getKey = button.getAttribute('data-key')
        if (keyCode == getKey){
            changeColor(button)
        }
    })
})