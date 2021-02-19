const Modal = {
    open() {
        //Abrir o Modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //Fechar o Modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}