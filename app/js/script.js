const hambugerButton = document.querySelector('#hamburgerButton');

hambugerButton.addEventListener('click', function(){
    console.log('open hambuger');

    if(hambugerButton.classList.contains('open')){
        hambugerButton.classList.remove('open');
    }
    else{
        hambugerButton.classList.add('open');
    }
})