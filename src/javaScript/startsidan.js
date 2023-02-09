function buttonHiVi(n) {
    if (n===1){
        document.getElementById('modal-body').style.display = 'block';
        document.getElementById('modalBodyBackdrop').style.display = 'block';
    }
    else {
        document.getElementById('modal-body').style.display = 'none';
        document.getElementById('modalBodyBackdrop').style.display = 'none';
    }
}