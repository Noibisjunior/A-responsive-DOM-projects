const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn = document.querySelector('.btn-hero')
const span = document.querySelector('.span')

btn.addEventListener('click',function() {
    let hexColor = '#'
    for(let i = 0; i < 6; i++){
        hexColor += colors[randomColor()]
    }
    document.body.style.backgroundColor = hexColor
    span.textContent = hexColor
})



function randomColor() {
    return Math.floor(Math.random() * colors.length)
}

// let count = 0;

// const value = document.querySelector('#value')
// const Btns = document.querySelectorAll('.btn')

// Btns.forEach(function(btn) {
//     btn.addEventListener('click',function(e) {
//         const styles = e.currentTarget.classList
//        // console.log(styles);
//        if(styles.contains('increase')){
//         count++
//        }
//        else if(styles.contains('decrease')){
//         count--
//        }
//        else{count = 0}
//        if (count > 0){
//         value.style.color = 'green'
//        }
//        else if (count < 0) {
//          value.style.color = 'red'
//        }
//        else if(count == 0){
//         value.style.color = 'black'

//        }


// value.textContent = count
//     })
// })



