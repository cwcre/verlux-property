const vBtn1 = document.getElementById('btn1');
const vBtn2 = document.getElementById('btn2');
const vSelects = document.getElementById('selects');
const vSmall = document.getElementById('small')

vBtn1.addEventListener('click', () => {
    vBtn1.style.color = 'white'
    vBtn1.style.backgroundColor = 'rgb(228, 50, 76)'
    vBtn2.style.color = 'white'
    vBtn2.style.backgroundColor = 'rgba(0,0,0,0)'
    vSelects.style.display = 'flex'
    setTimeout(() => {
        vSelects.style.opacity = '1'
    }, 150);
    vSmall.style.display = 'flex'
    setTimeout(() => {
        vSmall.style.opacity = '1'
    }, 150);
})

vBtn2.addEventListener('click', () => {
    vBtn2.style.color = 'white'
    vBtn2.style.backgroundColor = 'rgb(228, 50, 76)'
    vBtn1.style.color = 'white'
    vBtn1.style.backgroundColor = 'rgba(0,0,0,0)'
    vSelects.style.opacity = '0'
    setTimeout(() => {
        vSelects.style.display = 'none'
    }, 230);
    vSmall.style.opacity = '0'
    setTimeout(() => {
        vSmall.style.display = 'none'
    }, 230);
})