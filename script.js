const windowScroll =(links)=> {
     window.addEventListener('scroll', () => {
    for(link of links) {
        (window.scrollY > 80) ? link.classList.add('active') : link.classList.remove('active');
    }
});
}
windowScroll(document.querySelectorAll('.nav-link'));

// email validation
const inputEmail = document.querySelector('.input-email');
const btnSubmit = document.querySelector('.btn-submit');
const txtError = document.querySelector('.txt-error');

const emailValidation = function() {
    const rValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(inputEmail.value.match(rValidation)) {
        return true;
    } else {
        txtError.classList.add('active');
        if(txtError.classList.contains('active')) {
            txtError.classList.remove('active');
            setTimeout(()=> txtError.classList.add('active'), 200);
        }
        return false;
    }
}
btnSubmit.addEventListener('click', emailValidation);