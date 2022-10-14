function modal() {

    // MODAL
    // ========

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');
          

    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerId);
    }
    
    function hideModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(button => { 
        button.addEventListener('click', showModal);
    });     

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            hideModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if(modal.classList.contains('show') && e.code === 'Escape') {
            hideModal();
        }
    });

    const modalTimerId = setTimeout(showModal, 60000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.
        documentElement.scrollHeight - 1) {
            showModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

module.exports = modal;

