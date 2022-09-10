// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modalBtn = document.querySelector('.modal-btn')
const modalOverlay = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click',function () {
    modalOverlay.classList.add('open-modal')
    var word=prompt('Enter a word')
    var reverseWord = word.split('').reverse('').join('')
    if (reverseWord.toLowerCase() === word.toLowerCase()) {
        alert('This word is a pallindrum')
    }else if(reverseWord.toUpperCase() !== word.toLowerCase()){
        alert('This word is not a pallindrum')
    }
})

closeBtn.addEventListener('click',function () {
    modalOverlay.classList.remove('open-modal')
})









